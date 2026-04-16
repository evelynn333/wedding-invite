import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const events = [
    { time: "13:00", title: "Ceremonia" },
    { time: "15:00", title: "Cóctel" },
    { time: "18:00", title: "Banquete" },
    { time: "21:00", title: "Fiesta" },
];

export const Timeline = () => {
    return (
        <Box
            sx={{
                textAlign: "center",
            }}
        >
            {/* Título */}
            <Typography
                sx={{
                    fontFamily: "Playfair Display",
                    fontSize: { xs: "1.6rem", md: "2rem" },
                    mb: 6,
                }}
            >
                Itinerario
            </Typography>

            {/* Línea vertical */}
            <Box
                sx={{
                    position: "relative",
                    mx: "auto",
                    width: "2px",
                    backgroundColor: "divider",
                    py: 2,
                }}
            >
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                mb: 6,
                            }}
                        >
                            {/* Punto */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    backgroundColor: "primary.main",
                                }}
                            />

                            {/* Contenido */}
                            <Box
                                sx={{
                                    position: "relative",
                                    left: { xs: "20px", md: "40px" },
                                    textAlign: "left",
                                }}
                            >
                                {/* Hora */}
                                <Typography
                                    sx={{
                                        fontSize: "0.8rem",
                                        letterSpacing: "2px",
                                        color: "text.secondary",
                                    }}
                                >
                                    {event.time}
                                </Typography>

                                {/* Evento */}
                                <Typography
                                    sx={{
                                        fontFamily: "Playfair Display",
                                        fontSize: {
                                            xs: "1.2rem",
                                            md: "1.4rem",
                                        },
                                    }}
                                >
                                    {event.title}
                                </Typography>
                            </Box>
                        </Box>
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
};
