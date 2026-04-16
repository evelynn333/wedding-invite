import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { createGuest } from "../services/guestService";
import { motion } from "framer-motion";

export const Form = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [attending, setAttending] = useState("");
    const [companion, setCompanion] = useState("");
    const [hasAllergies, setHasAllergies] = useState("");
    const [diet, setDiet] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setError("");

        // ✅ Validación elegante
        if (!name || !surname || !attending || !hasAllergies) {
            setError("Por favor, completa todos los campos");
            return;
        }

        try {
            setLoading(true);

            await createGuest({
                name,
                surname,
                attending: attending === "yes",
                has_companion: companion === "yes",
                has_allergies: hasAllergies === "yes",
                dietary_restrictions: diet,
            });

            setSuccess(true);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            if (err.message.includes("duplicate")) {
                setError("Ya has confirmado anteriormente");
            } else {
                setError("Ha ocurrido un error");
            }
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <Box
                sx={{
                    textAlign: "center",
                    mt: 4,
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "Playfair Display",
                        fontSize: "1.5rem",
                        color: "primary.main",
                    }}
                >
                    Gracias por confirmar
                </Typography>

                <Typography
                    sx={{
                        mt: 1,
                        color: "text.secondary",
                    }}
                >
                    Nos vemos en un día muy especial 💛
                </Typography>
            </Box>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
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
                <Typography
                    sx={{
                        fontFamily: "Playfair Display",
                        fontSize: { xs: "1.6rem", md: "2rem" },
                        textAlign: "center",
                        mb: 4,
                    }}
                >
                    Confirma tu asistencia
                </Typography>
                {/* Nombre */}
                <TextField
                    variant="standard"
                    label="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />

                <TextField
                    variant="standard"
                    label="Apellidos"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    fullWidth
                />

                {/* Asistencia */}
                <TextField
                    select
                    variant="standard"
                    label="¿Asistirás?"
                    value={attending}
                    onChange={(e) => setAttending(e.target.value)}
                    fullWidth
                >
                    <MenuItem value="yes">Sí</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                </TextField>
                {attending === "yes" && (
                    <TextField
                        select
                        variant="standard"
                        label="¿Vendrás con acompañante?"
                        value={companion}
                        onChange={(e) => setCompanion(e.target.value)}
                        fullWidth
                    >
                        <MenuItem value="yes">Sí</MenuItem>{" "}
                        <MenuItem value="no">No</MenuItem>{" "}
                    </TextField>
                )}

                {/* Alergias */}
                <TextField
                    select
                    variant="standard"
                    label="¿Tienes alguna alergia?"
                    value={hasAllergies}
                    onChange={(e) => setHasAllergies(e.target.value)}
                    fullWidth
                >
                    <MenuItem value="yes">Sí</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                </TextField>

                {/* Campo condicional */}
                {hasAllergies === "yes" && (
                    <TextField
                        variant="standard"
                        label="Indícanos cuál"
                        value={diet}
                        onChange={(e) => setDiet(e.target.value)}
                        fullWidth
                        multiline
                    />
                )}

                {/* Error elegante */}
                {error && (
                    <Typography
                        sx={{
                            color: "error.main",
                            fontSize: "0.85rem",
                            textAlign: "center",
                        }}
                    >
                        {error}
                    </Typography>
                )}

                {/* Botón */}
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={loading}
                    sx={{
                        mt: 2,
                        backgroundColor: "primary.main",
                    }}
                >
                    Confirmar
                </Button>
            </Box>
        </motion.div>
    );
};
