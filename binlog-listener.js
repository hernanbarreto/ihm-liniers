require('dotenv').config();
const mysql = require('mysql');
const mysql2 = require('mysql2');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');
const MySQLEvents = require('@rodrigogs/mysql-events');

// Configuración de las bases de datos
const DB_CONFIG_MASTER = {
    host: process.env.DB_HOST_MASTER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
};

const DB_CONFIG_SLAVE = {
    host: process.env.DB_HOST_SLAVE,
    user: process.env.DB_USER_SLAVE,
    password: process.env.DB_PASSWORD_SLAVE,
    database: process.env.DB_NAME_SLAVE,
    port: process.env.DB_PORT_SLAVE || 3306
};

const wss = new WebSocket.Server({ host: '0.0.0.0', port: process.env.PORT || 8080 });

const MODE = process.env.MODE || 'master';  // 'master' o 'slave'
const REPLICATION_ENABLED = process.env.REPLICATION_ENABLED === 'true'; // Convertir a booleano
const DB_CONFIG = MODE === 'master' ? DB_CONFIG_MASTER : DB_CONFIG_SLAVE;

const connection = mysql.createPool(DB_CONFIG);
// Almacenamiento local de cambios pendientes
const PENDING_CHANGES_FILE = path.join(__dirname, 'pending_changes.json');

// Cargar los cambios pendientes desde el archivo local
function loadPendingChanges() {
    if (fs.existsSync(PENDING_CHANGES_FILE)) {
        const data = fs.readFileSync(PENDING_CHANGES_FILE, 'utf8');
        return JSON.parse(data);
    }
    return [];
}

// Guardar los cambios pendientes en el archivo local
function savePendingChanges(changes) {
    fs.writeFileSync(PENDING_CHANGES_FILE, JSON.stringify(changes, null, 2));
}

async function startBinlogListener() {
    const instance = new MySQLEvents(connection, { startAtEnd: true });

    await instance.start();
    console.log(`⏳ Escuchando cambios en el ${MODE}...`);

    instance.addTrigger({
        name: 'Detectar cambios en todas las tablas',
        expression: `${DB_CONFIG.database}.*`,
        statement: MySQLEvents.STATEMENTS.ALL,
        onEvent: async event => {
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(event));
                }
            });

            // Si estamos en el master y la replicación está habilitada
            if (MODE === 'master' && REPLICATION_ENABLED) {
                try {
                    await replicateChangeToSlave(event);
                } catch (err) {
                    console.error('Error al replicar cambios en el slave:', err);
                    // Si no podemos replicar, almacenamos el cambio localmente
                    storePendingChange(event);
                }
            }
        }
    });

    instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error);
    instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error);

    // Revisar cambios pendientes y replicarlos cuando haya conexión
    setInterval(async () => {
        const pendingChanges = loadPendingChanges();
        if (pendingChanges.length > 0) {
            console.log(`💾 Replicando ${pendingChanges.length} cambios pendientes...`);
            for (let i = 0; i < pendingChanges.length; i++) {
                const change = pendingChanges[i];
                try {
                    await replicateChangeToSlave(change);
                    pendingChanges.splice(i, 1); // Eliminar el cambio replicado
                    savePendingChanges(pendingChanges); // Guardar los cambios restantes
                    i--; // Para no saltar un cambio después de eliminar
                } catch (err) {
                    console.error('Error al replicar un cambio pendiente:', err);
                    break; // Si hay un error, dejamos de intentar replicar por ahora
                }
            }
        }
    }, 5000); // Reintentar cada 5 segundos (ajustar según necesidad)
}

// Almacenar el cambio pendiente en el archivo
function storePendingChange(event) {
    const pendingChanges = loadPendingChanges();
    pendingChanges.push(event);
    savePendingChanges(pendingChanges);
}

// Función para replicar cambios en el slave
async function replicateChangeToSlave(event) {
    // Aquí deberías conectar a la base remota solo si está habilitada la replicación
    const slaveConnection = mysql2.createConnection(DB_CONFIG_SLAVE);
    const { statement, table, type, affectedRows } = event;

    switch (type) {
        case 'INSERT':
            const insertData = event.affectedRows.map(row => row.after);
            insertData.forEach(async (row) => {
                const query = `INSERT INTO ${table} SET ?`;
                await executeQuery(slaveConnection, query, row);
            });
            break;
        case 'UPDATE':
            const updateData = event.affectedRows.map(row => row.after);
            updateData.forEach(async (row) => {
                const query = `UPDATE ${table} SET ? WHERE id = ?`;
                await executeQuery(slaveConnection, query, [row, row.id]);
            });
            break;
        case 'DELETE':
            const deleteData = event.affectedRows.map(row => row.before);
            deleteData.forEach(async (row) => {
                const query = `DELETE FROM ${table} WHERE id = ?`;
                await executeQuery(slaveConnection, query, [row.id]);
            });
            break;
        default:
            console.log('Evento no manejado:', event);
    }
    slaveConnection.end(); // Cerrar la conexión después de cada operación
}

// Función para ejecutar consultas
function executeQuery(connection, query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

// Iniciar el servicio
startBinlogListener().catch(console.error);
