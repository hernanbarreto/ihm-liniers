'use client';
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const DatabaseContext = createContext();

// Hook para acceder al contexto
export const useDatabase = () => useContext(DatabaseContext);

// Proveedor del contexto
export const DatabaseProvider = ({ children }) => {
    const [changes, setChanges] = useState([]);

    const addChange = (event) => {
        setChanges(prevChanges => [...prevChanges, event]);
    };

    return (
        <DatabaseContext.Provider value={{ changes, addChange }}>
            {children}
        </DatabaseContext.Provider>
    );
};
