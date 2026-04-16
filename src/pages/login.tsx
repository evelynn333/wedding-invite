import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            setError("");
            await login(email, password);
            navigate("/admin");
        } catch {
            setError("Credenciales incorrectas");
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "400px",
                    textAlign: "center",
                }}
            >
                {/* Título */}
                <Typography
                    sx={{
                        fontFamily: "Playfair Display",
                        fontSize: { xs: "1.8rem", md: "2.2rem" },
                        mb: 4,
                    }}
                >
                    Acceso novios
                </Typography>

                {/* Inputs */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        "& .MuiInput-underline:before": {
                            borderBottomColor: "divider",
                        },
                        "& .MuiInput-underline:hover:before": {
                            borderBottomColor: "primary.main",
                        },
                    }}
                >
                    <TextField
                        variant="standard"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        variant="standard"
                        type="password"
                        label="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                </Box>

                {/* Error */}
                {error && (
                    <Typography
                        sx={{
                            color: "error.main",
                            mt: 2,
                            fontSize: "0.85rem",
                        }}
                    >
                        {error}
                    </Typography>
                )}

                {/* Botón */}
                <Button
                    onClick={handleLogin}
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 4,
                        backgroundColor: "primary.main",
                    }}
                >
                    Entrar
                </Button>
            </Box>
        </Box>
    );
};
