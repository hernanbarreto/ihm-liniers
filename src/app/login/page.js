"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box, Typography, Alert, Stack, Divider } from "@mui/material";
import LogoCliente from "../media/logocliente";
import LogoEmpresa from "../media/logoempresa";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
      console.log();
      localStorage.clear();
      localStorage.setItem("token", data.token);
      router.push("/");
    } else {
      setError(data.message);
    }
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      bgcolor="#1a2b3c"
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      sx={{
        "& *": {
          userSelect: 'none',
          "-webkit-user-select": 'none',
          "-moz-user-select": 'none',
        }
      }}
    >
      <Box 
        component="form" 
        onSubmit={handleLogin} 
        bgcolor="#2c3e50" 
        p={4} 
        borderRadius={3} 
        boxShadow={3} 
        width="100%" 
        maxWidth="400px"
      >
        {/* Logos en la parte superior */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Box sx={{ 
            width: 100, 
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <LogoCliente sx={{ 
              maxWidth: '100%', 
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain'
            }} />
          </Box>
          
          <Box sx={{ 
            width: 100, 
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <LogoEmpresa sx={{ 
              maxWidth: '100%', 
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain'
            }} />
          </Box>
        </Stack>

        {/* Título debajo de los logos */}
        <Typography variant="h5" align="center" color="#fff" sx={{ 
          fontWeight: 'bold',
          mt: 2,
          mb: 3
        }}>
          Iniciar Sesión
        </Typography>

        {/* Campos de formulario */}
        <TextField
          label="Usuario"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            style: { backgroundColor: "#34495e", color: "white" }
          }}
          required
        />
        
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            style: { backgroundColor: "#34495e", color: "white" }
          }}
          required
        />
        
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 3, py: 1.5 }}
        >
          Ingresar
        </Button>
      </Box>
    </Box>
  );
}
