"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

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
      bgcolor="#1a2b3c"  // Fondo oscuro con toques de azul (similar a colores ferroviarios)
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
        <Typography variant="h4" align="center" color="#fff" mb={2}>
          Iniciar Sesión
        </Typography>
        
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
          sx={{ mt: 3 }}
        >
          Ingresar
        </Button>
      </Box>
    </Box>
  );
}
