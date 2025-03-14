const MySQLEvents = require('@rodrigogs/mysql-events');
const mysql = require('mysql');  // Usa mysql en lugar de mysql2
const WebSocket = require('ws');

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "@ats-liniers",
    database: "ats_db"
};

const wss = new WebSocket.Server({ port: 8080 });

async function startBinlogListener() {
    const connection = mysql.createPool(DB_CONFIG);  // Usa un pool en lugar de una conexión directa
    const instance = new MySQLEvents(connection, { startAtEnd: true });

    await instance.start();
    console.log("⏳ Escuchando cambios en la base de datos...");

    instance.addTrigger({
        name: 'Detectar cambios en todas las tablas',
        expression: `${DB_CONFIG.database}.*`,
        statement: MySQLEvents.STATEMENTS.ALL,
        onEvent: event => {
            console.log("🔄 Cambio detectado:", event);
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(event));
                }
            });
        }
    });

    instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error);
    instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error);
}

startBinlogListener().catch(console.error);