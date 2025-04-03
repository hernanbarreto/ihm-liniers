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
  const [showMimico, setShowMimico] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  {/*L: LIBRE*/}
  {/*O: OCUPADO*/}
  {/*SD: SIN DATOS*/}
  {/*RA: RUTA ABSOLUTA*/}
  {/*RM: RUTA MANIOBRA*/}
  {/*DES: DESLIZAMIENTO*/}
  {/*REQ: REQUERIDO*/}
  const [ArrayCDV, setArrayCDV] = useState({});

  const [ArrayMDC, setArrayMDC] = useState({});

  const router = useRouter();
  
  const { changes } = useDatabase();
  useDatabaseListener(); // Escuchar los cambios en la base de datos

  {/*
    "R": ROJO, 
    "RF": FILAMENTO ROJO QUEMADO, 
    "G": VERDE, 
    "GF": FILAMENTO VERDE QUEMADO, 
    "V": VIOLETA, 
    "VF": FILAMENTO VIOLETA QUEMADO, 
    "SA": SIN AVANCE,
    "CDV_O": AL MENOS UN CDV OCUPADO,
    "IR": INICIO DE RUTA, 
    "SD": SIN DATOS, 
    "X": BLOQUEADA*/
  }
  const ArraySEN_MAN = {
    "LS53":{"R": false, "RF": false, "G": false, "GF": false, "V": false, "VF": false, "SA": false, "CDV_O": false, "IR": false, "SD": true, "X": false, "RUTA": null},
    "LS50":{"R": false, "RF": false, "G": false, "GF": false, "V": null, "VF": null, "SA": null, "CDV_O": null, "IR": false, "SD": true, "X": false, "RUTA": '2'},
    "LS51":{"R": false, "RF": false, "G": false, "GF": false, "V": false, "VF": false, "SA": false, "CDV_O": false, "IR": false, "SD": true, "X": false, "RUTA": null},
    "LS59":{"R": false, "RF": false, "G": false, "GF": false, "V": false, "VF": false, "SA": false, "CDV_O": false, "IR": false, "SD": true, "X": false, "RUTA": '2'},
    "LS57":{"R": false, "RF": false, "G": false, "GF": false, "V": false, "VF": false, "SA": false, "CDV_O": false, "IR": false, "SD": true, "X": false, "RUTA": '2'},
    "LS54":{"R": false, "RF": false, "G": false, "GF": false, "V": false, "VF": false, "SA": false, "CDV_O": false, "IR": false, "SD": true, "X": false, "RUTA": '3'},
    "LS55":{"R": false, "RF": false, "G": false, "GF": false, "V": false, "VF": false, "SA": false, "CDV_O": false, "IR": false, "SD": true, "X": false, "RUTA": '2'},
    "LS56":{"R": false, "RF": false, "G": false, "GF": false, "V": false, "VF": false, "SA": false, "CDV_O": false, "IR": false, "SD": true, "X": false, "RUTA": null},
    "LS52":{"R": false, "RF": false, "G": false, "GF": false, "V": false, "VF": false, "SA": false, "CDV_O": false, "IR": false, "SD": true, "X": false, "RUTA": '3'},
  };

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
      }else{
        if (change.table === 'cdv') {
          const updatedCDVs = {};
            change.affectedRows.forEach(row => {
              const newV = row.after;
              updatedCDVs[newV.CDV] = {
                L: newV.L,
                SD: newV.SD,
                RA: newV.RA,
                RM: newV.RM,
                DES: newV.DES,
                REQ: newV.REQ,
                X: newV.X
              };
            });
          setArrayCDV(prev => ({ ...prev, ...updatedCDVs }));
        }else{
          if (change.table === 'mdc') {
            const updatedMDCs = {};
              change.affectedRows.forEach(row => {
                const newV = row.after;
                updatedMDCs[newV.MDC] = {
                  N: newV.N,
                  R: newV.R,
                  F: newV.F,
                  M: newV.M,
                  ENC: newV.ENC,
                  SD: newV.SD,
                };
              });
            setArrayMDC(prev => ({ ...prev, ...updatedMDCs }));  
          }
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

  useEffect(() => {
    if (userRole === 'operador'){  
        const getData = async () => {
          try {
            const response = await fetch("/api/get-states-cdv", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(),
            });
  
            const data = await response.json();

            if (data.exists) {
              setArrayCDV(prev => {
                const newState = { ...prev, ...data.data };
                return newState;
              });
            } else {
              handleLogout();
            }
          } catch (error) {
            console.error("Error datos:", error);
            handleLogout();
          }
        };
  
        getData();
    }else{
      setShowMimico(false);
    }
  }, [userRole]);


  useEffect(() => {
    if (userRole === 'operador'){  
        const getData = async () => {
          try {
            const response = await fetch("/api/get-states-mdc", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(),
            });
  
            const data = await response.json();

            if (data.exists) {
              setArrayMDC(prev => {
                const newState = { ...prev, ...data.data };
                return newState;
              });
            } else {
              handleLogout();
            }
          } catch (error) {
            console.error("Error datos:", error);
            handleLogout();
          }
        };
  
        getData();
    }else{
      setShowMimico(false);
    }
  }, [userRole]);

  useEffect(() => {
    if ((Object.keys(ArrayCDV).length)&&(Object.keys(ArrayMDC).length)){
      setShowMimico(true);
    }
  }, [ArrayCDV, ArrayMDC]);


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
    <Table size="small" sx={{ backgroundColor: "#424242", borderRadius: "8px", width: "100%"}}>
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
      <AppBar position="sticky" sx={{ backgroundColor: "#222a4f", padding: "0 16px", height: 120, userSelect: 'none'}}>
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
        {(showMimico) ? (
          <Mimico 
            className="w-full h-full object-contain" 
            cdv_prin={ArrayCDV} 
            mdc={ArrayMDC} 
            sen_man={ArraySEN_MAN}
          />
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
