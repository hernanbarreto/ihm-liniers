"use client";
import * as React from 'react';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Mimico from "./media/mimico";
import { 
  Box, 
  AppBar,
  IconButton, 
  Tooltip, 
  useMediaQuery,
  Grid, 
  Toolbar, 
  Table, 
  TableBody, 
  TableHead, 
  TableRow } from "@mui/material";
import {
  Settings as SettingsIcon,
  Build as HardwareIcon,
  Notifications as AlarmsIcon,
  ExitToApp as LogoutIcon,
  Help as HelpIcon,
  Dashboard as DashboardIcon
} from '@mui/icons-material';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';

import LogoCliente from "./media/logocliente";
import LogoEmpresa from "./media/logoempresa";

import { useDatabase } from './components/DatabaseContext';
import useDatabaseListener from './components/useDatabaseListener';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMimico, setShowMimico] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);

  {/*L: LIBRE*/}
  {/*O: OCUPADO*/}
  {/*SD: SIN DATOS*/}
  {/*RA: RUTA ABSOLUTA*/}
  {/*RM: RUTA MANIOBRA*/}
  {/*DES: DESLIZAMIENTO*/}
  {/*REQ: REQUERIDO*/}
  const [ArrayCDV, setArrayCDV] = useState({});
  const [ArrayMDC, setArrayMDC] = useState({});
  const [ArraySEN_MAN, setArraySEN_MAN] = useState({});
  const [ArraySEN_PRIN, setArraySEN_PRIN] = useState({});

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
                REQN: newV.REQN,
                REQR: newV.REQR,
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
          }else{
            if (change.table === 'sen_man') {
              const updatedSEN_MANs = {};
                change.affectedRows.forEach(row => {
                  const newV = row.after;
                  updatedSEN_MANs[newV.SEN] = {
                    R: newV.R,
                    RF: newV.RF,
                    G: newV.G,
                    GF: newV.GF,
                    V: newV.V,
                    VF: newV.VF,
                    CDV_O: newV.CDV_O,
                    IR: newV.IR,
                    SD: newV.SD,
                    X: newV.X,
                    RUTA: newV.RUTA,
                  };
                });
              setArraySEN_MAN(prev => ({ ...prev, ...updatedSEN_MANs }));  
            }else{
              if (change.table === 'sen_prin') {
                const updatedSEN_PRINs = {};
                  change.affectedRows.forEach(row => {
                    const newV = row.after;
                    updatedSEN_PRINs[newV.SEN] = {
                      R: newV.R,
                      RF: newV.RF,
                      G: newV.G,
                      GF: newV.GF,
                      Y: newV.Y,
                      YF: newV.YF,
                      YY: newV.YY,
                      YYF: newV.YYF,
                      SD: newV.SD,
                      BD: newV.BD,
                      X: newV.X,
                      RUTA: newV.RUTA,
                    };
                  });
                setArraySEN_PRIN(prev => ({ ...prev, ...updatedSEN_PRINs }));  
              }
            }
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
            setUserName(data.username);
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
      clearOperador();
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
      clearOperador();
    }
  }, [userRole]);

  useEffect(() => {
    if (userRole === 'operador'){  
        const getData = async () => {
          try {
            const response = await fetch("/api/get-states-sen_man", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(),
            });
  
            const data = await response.json();

            if (data.exists) {
              setArraySEN_MAN(prev => {
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
      clearOperador();
    }
  }, [userRole]);


  useEffect(() => {
    if (userRole === 'operador'){  
        const getData = async () => {
          try {
            const response = await fetch("/api/get-states-sen_prin", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(),
            });
  
            const data = await response.json();

            if (data.exists) {
              setArraySEN_PRIN(prev => {
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
      clearOperador();
    }
  }, [userRole]);


  useEffect(() => {
    if ((Object.keys(ArrayCDV).length)&&(Object.keys(ArrayMDC).length)&&(Object.keys(ArraySEN_MAN).length)&&(Object.keys(ArraySEN_PRIN).length)){
      setShowMimico(true);
    }
  }, [ArrayCDV, ArrayMDC, ArraySEN_MAN, ArraySEN_PRIN]);


  const useBreakpoints = () => {
    const isSm = useMediaQuery('(max-width:899px)');
    const isMd = useMediaQuery('(min-width:900px) and (max-width:1199px)');
    const isLg = useMediaQuery('(min-width:1200px)');
    
    return { isSm, isMd, isLg };
  };

  const { isSm, isMd, isLg } = useBreakpoints();

  // Funciones de los botones (placeholder)
  const handleSettings = () => console.log('Abrir configuración');
  const handleHardware = () => console.log('Diagnóstico de hardware');
  const handleAlarms = () => console.log('Alarmas y eventos');
  const handleHelp = () => console.log('Ayuda');
  const handleDashboard = () => console.log('Panel de control');

  const handleLogout = () => {
    clearOperador();
    localStorage.removeItem("token");
    localStorage.removeItem("userId"); // Asegúrate de eliminar también el ID del usuario
    router.push("/login");
  };

  const handleLogoutClick = () => {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: "¿Está seguro que desea salir del sistema?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#424242', // gris oscuro
      cancelButtonColor: '#757575',  // gris más claro
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar',
      background: '#121212', // fondo negro
      color: '#ffffff',      // texto blanco
      customClass: {
        popup: 'arial-font',
        title: 'arial-font',
        htmlContainer: 'arial-font',
        confirmButton: 'arial-font',
        cancelButton: 'arial-font'
      },
      backdrop: true // sin gif ni animaciones
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
      }
    });
  };
  
  const clearOperador = () => {
    setShowMimico(false);
    setArrayCDV({});
    setArrayMDC({});
    setArraySEN_MAN({});
    setArraySEN_PRIN({});
  };

  if (!isAuthenticated) return null;

  const columns = [
    { width: 20, label: 'Número', dataKey: 'number' },
    { width: 20, label: 'Fecha', dataKey: 'date' },
    { width: 20, label: 'Hora', dataKey: 'time', numeric: true },
    { width: 170, label: 'Mensaje', dataKey: 'message' },
    { width: 50, label: 'Estado', dataKey: 'status' },
  ];

  const alarms = [
    { id: 1, number: "", date: "", time: "", message: "", status: "" },
    { id: 2, number: "", date: "", time: "", message: "", status: "" },
    { id: 3, number: "", date: "", time: "", message: "", status: "" },
    { id: 4, number: "", date: "", time: "", message: "", status: "" },
    { id: 5, number: "", date: "", time: "", message: "", status: "" },
    { id: 6, number: "", date: "", time: "", message: "", status: "" },
    { id: 7, number: "", date: "", time: "", message: "", status: "" },
    { id: 8, number: "", date: "", time: "", message: "", status: "" }
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderRight: '1px solid rgba(224, 224, 224, 1)',
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
          <StyledTableCell key={column.dataKey} variant="head" align="center" style={{ width: column.width }}>
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

  <AppBar position="sticky" sx={{ 
  backgroundColor: "#222a4f", 
  padding: isSm ? "0 8px" : "0 16px", 
  height: isSm ? 100 : 120,
  userSelect: 'none'
}}
onContextMenu={(e) => {
  e.preventDefault();
  e.stopPropagation();
}}  
>
  <Toolbar sx={{ 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    height: '100%',
    gap: isSm ? 1 : 2,
    padding: '0 !important'
  }}>
    {/* Logo del Cliente - Tamaño fijo */}
    <Box sx={{ 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: '100%',
      width: 180, // Tamaño fijo igual para ambos logos
      minWidth: 180,
      backgroundColor: "#222a4f",
      paddingX: "8px",
      overflow: "hidden",
      flexShrink: 0
    }}>
      <LogoCliente sx={{ 
        width: "100%",
        height: "auto",
        maxHeight: "80px",
        objectFit: "contain"
      }} />
    </Box>

    {/* Tabla optimizada - Ahora con más espacio */}
    {userRole === "operador" && (isMd || isLg) && (
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        height: '100%',
        flexGrow: 1,
        backgroundColor: "#222a4f", 
        marginX: 2,
        maxWidth: 'calc(100% - 480px)' // Más espacio para la tabla
      }}>
        <Paper style={{ 
          height: isSm ? 90 : 110, 
          width: '100%',
          overflow: 'auto'
        }}>
          <TableVirtuoso
            data={alarms}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
          />
        </Paper>
      </Box>
    )}

    {/* Contenedor para botones y logo empresa */}
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: isSm ? 1 : 2,
      marginLeft: 'auto',
      flexShrink: 0
    }}>
      {/* Matriz de botones compacta */}
      <Grid container spacing={1} sx={{
        width: 'auto',
        maxWidth: 300,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1
      }}>
          {/* Botón 1: Configuración */}
          <Grid item>
            <Tooltip title="Configuración">
              <IconButton 
                color="inherit" 
                onClick={handleSettings}
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  padding: isSm ? '8px' : '12px'
                }}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          
          {/* Botón 2: Diagnóstico */}
          <Grid item>
            <Tooltip title="Diagnóstico de hardware">
              <IconButton 
                color="inherit" 
                onClick={handleHardware}
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  padding: isSm ? '8px' : '12px'
                }}
              >
                <HardwareIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          
          {/* Botón 3: Alarmas */}
          <Grid item>
            <Tooltip title="Alarmas y eventos">
              <IconButton 
                color="inherit" 
                onClick={handleAlarms}
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  padding: isSm ? '8px' : '12px'
                }}
              >
                <AlarmsIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          
          {/* Botón 4: Panel de control */}
          <Grid item>
            <Tooltip title="Panel de control">
              <IconButton 
                color="inherit" 
                onClick={handleDashboard}
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  padding: isSm ? '8px' : '12px'
                }}
              >
                <DashboardIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          
          {/* Botón 5: Ayuda */}
          <Grid item>
            <Tooltip title="Ayuda">
              <IconButton 
                color="inherit" 
                onClick={handleHelp}
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  padding: isSm ? '8px' : '12px'
                }}
              >
                <HelpIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          
          {/* Botón 6: Salir */}
          <Grid item>
            <Tooltip title="Salir">
              <IconButton 
                color="inherit" 
                onClick={handleLogoutClick}
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  padding: isSm ? '8px' : '12px'
                }}
              >
                <LogoutIcon />
              </IconButton>
            </Tooltip>
        </Grid>
      </Grid>

      {/* Logo de la Empresa - Mismo tamaño que LogoCliente */}
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: 'center',
        height: '100%',
        width: 180, // Mismo tamaño que LogoCliente
        minWidth: 180,
        backgroundColor: "#222a4f",
        paddingX: "8px",
        flexShrink: 0
      }}>
        <LogoEmpresa sx={{ 
          width: "100%",
          height: "auto",
          maxHeight: "80px",
          objectFit: "contain"
        }} />
      </Box>
    </Box>
  </Toolbar>
</AppBar>


      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", overflow: "hidden", paddingTop: 2 }}>
        {(showMimico) ? (
          <Mimico 
            className="w-full h-full object-contain" 
            username={userName}
            cdv_prin={ArrayCDV} 
            mdc={ArrayMDC} 
            sen_man={ArraySEN_MAN}
            sen_prin={ArraySEN_PRIN}
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
