"use client";
import * as React from 'react';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Mimico from "./media/mimico";
import { Box, Button, AppBar, Toolbar, Table, TableBody, TableHead, TableRow } from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { styled } from '@mui/material/styles';

import LogoCliente from "./media/logocliente";

import { useDatabase } from './components/DatabaseContext';
import useDatabaseListener from './components/useDatabaseListener';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const router = useRouter();
  
  const { changes } = useDatabase();
  useDatabaseListener(); // Escuchar los cambios en la base de datos

  // Reaccionar a los cambios detectados
  useEffect(() => {
    if (changes.length > 0) {
      // Cuando se detecten cambios, procesarlos
      console.log('Cambios detectados:', changes);

      // Verificar si el cambio está relacionado con el usuario o rol
      const change = changes[changes.length-1];
      if (change.table === 'users') {
        if (change.type === 'UPDATE' && change.table === 'users' && change.affectedColumns.includes('role') && change.affectedRows[0].after.id === userId) {
          if (change.affectedRows[0].after.id !== userRole) {
            setUserRole(change.affectedRows[0].after.role);
          }
        } else if (change.type === 'DELETE' && change.table === 'users' && change.affectedRows[0].before.id === userId) {
          handleLogout();
        }
      }
    }
  }, [changes]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);

      const getUserRole = async () => {
        try {
          const response = await fetch("/api/check-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          });

          const data = await response.json();

          if (data.exists) {
            console.log(data);
            setUserRole(data.role);
            setUserId(data.id);
          } else {
            handleLogout();
          }
        } catch (error) {
          console.error("Error obteniendo rol del usuario:", error);
          handleLogout();
        }
      };

      getUserRole();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId"); // Asegúrate de eliminar también el ID del usuario
    router.push("/login");
  };

  if (!isAuthenticated) return null;

  const columns = [
    { width: 20, label: 'Número', dataKey: 'number' },
    { width: 50, label: 'Fecha', dataKey: 'date' },
    { width: 50, label: 'Hora', dataKey: 'time', numeric: true },
    { width: 110, label: 'Mensaje', dataKey: 'message' },
    { width: 50, label: 'Estado', dataKey: 'status' },
  ];

  const alarms = [
    { id: 1, number: "A1", date: "2025-03-09", time: "12:00 PM", message: "Falla en el sistema", status: "Activo" },
    { id: 2, number: "A2", date: "2025-03-09", time: "12:30 PM", message: "Movimiento no esperado", status: "Resuelto" },
    { id: 3, number: "A3", date: "2025-03-09", time: "01:00 PM", message: "Problema de comunicación", status: "Activo" },
    { id: 4, number: "A4", date: "2025-03-09", time: "01:00 PM", message: "Problema de comunicación", status: "Activo" }
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 11,
      padding: '4px 8px',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 10,
      padding: '4px 8px',
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed', size: 'small' }} />
    ),
    TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
    TableRow,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
  };

  function fixedHeaderContent() {
    return (
      <StyledTableRow>
        {columns.map((column) => (
          <StyledTableCell key={column.dataKey} variant="head" align={column.numeric || false ? 'right' : 'left'} style={{ width: column.width }}>
            {column.label}
          </StyledTableCell>
        ))}
      </StyledTableRow>
    );
  }

  function rowContent(_index, row) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <StyledTableCell key={column.dataKey} align={column.numeric || false ? 'right' : 'left'}>
            {row[column.dataKey]}
          </StyledTableCell>
        ))}
      </React.Fragment>
    );
  }

  const userTable = (
    <Table size="small" sx={{ backgroundColor: "#424242", borderRadius: "8px", width: "100%" }}>
      <TableBody>
        <TableRow>
          <TableCell sx={{ color: "white", padding: "4px 8px" }}>Usuario 1</TableCell>
          <TableCell sx={{ color: "white", padding: "4px 8px" }}>operador</TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ color: "white", padding: "4px 8px" }}>Admin</TableCell>
          <TableCell sx={{ color: "white", padding: "4px 8px" }}>admin</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "black" }}>
      <AppBar position="sticky" sx={{ backgroundColor: "#222a4f", padding: "0 16px", height: 120 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 120 }}>
          <Box sx={{ display: "flex", alignItems: "center", height: 120, width: "210px", backgroundColor: "#222a4f", paddingX: "10px" }}>
            <LogoCliente sx={{ maxWidth: "100%", height: "auto", objectFit: "contain" }} />
          </Box>

          {userRole === "operador" ? (
            <Box sx={{ display: "flex", alignItems: "center", height: 120, width: '100%', backgroundColor: "#222a4f", paddingRight: '10px', paddingTop: '0px' }}>
              <Paper style={{ height: 110, width: '100%' }}>
                <TableVirtuoso
                  data={alarms}
                  components={VirtuosoTableComponents}
                  fixedHeaderContent={fixedHeaderContent}
                  itemContent={rowContent}
                />
              </Paper>
            </Box>
          ) : null}
          <Button onClick={handleLogout} sx={{ color: "white", "&:hover": { backgroundColor: "#d32f2f" }, backgroundColor: "#f44336", padding: "6px 12px", borderRadius: "4px" }}>
            Cerrar sesión
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", overflow: "hidden", paddingTop: 2 }}>
        {userRole === "operador" ? (
          <Mimico className="w-full h-full object-contain" />
        ) : userRole === "admin" ? (
          <Box sx={{ width: "100%", overflow: "auto", height: "100%" }}>
            {userTable}
          </Box>
        ) : (
          <p style={{ color: "white" }}>Cargando...</p>
        )}
      </Box>
    </Box>
  );
}
