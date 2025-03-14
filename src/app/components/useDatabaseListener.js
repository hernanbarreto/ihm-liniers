import { useEffect } from 'react';
import { useDatabase } from './DatabaseContext';

const useDatabaseListener = () => {
    const { addChange } = useDatabase();

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080'); // Conexión con el servidor WebSocket

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data); // Parsear el evento recibido
            addChange(data); // Añadir el cambio al contexto
        };

        return () => {
            socket.close(); // Cerrar la conexión cuando el componente se desmonte
        };
    }, [addChange]);
};

export default useDatabaseListener;
