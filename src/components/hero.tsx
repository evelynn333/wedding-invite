import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <Box
            sx={{
                position: "relative",
                textAlign: "center",
            }}
        >
            {/* 🕊️ Marca de agua */}
            <Box
                component={motion.img}
                src="./icons/couple.png"
                alt="Pareja"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "400px", md: "500px" },
                    opacity: 0.08,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />

            {/* Contenido */}
            <Box sx={{ position: "relative", zIndex: 1 }}>
                {/* Nombres */}
                <Typography
                    sx={{
                        fontFamily: "Playfair Display",
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                        lineHeight: 1.2,
                    }}
                >
                    Maricarmen
                </Typography>

                <Typography
                    sx={{
                        fontFamily: "Playfair Display",
                        fontSize: "2rem",
                        my: 1,
                        opacity: 0.7,
                    }}
                >
                    &
                </Typography>

                <Typography
                    sx={{
                        fontFamily: "Playfair Display",
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                    }}
                >
                    Juanfran
                </Typography>

                {/* Fecha */}
                <Typography
                    sx={{
                        mt: 3,
                        fontSize: "0.8rem",
                        letterSpacing: "2px",
                        color: "text.secondary",
                    }}
                >
                    5 SEPTIEMBRE 2026
                </Typography>
            </Box>
        </Box>
    );
};