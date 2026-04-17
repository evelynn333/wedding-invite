import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const events = [
    {
        time: "13:00",
        title: "Ceremonia",
        icon: "./icons/rings.png",
    },
    {
        time: "15:00",
        title: "Cóctel",
        icon: "/icons/coctel.png",
    },
    {
        time: "18:00",
        title: "Banquete",
        icon: "/icons/comida.png",
    },
    {
        time: "21:00",
        title: "Fiesta",
        icon: "/icons/fiesta.png",
    },
];

export const Timeline = () => {
    return (
        <Box sx={{ textAlign: "center" }}>
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

            {/* CONTENEDOR GENERAL */}
            <Box
                sx={{
                    position: "relative",
                    mx: "auto",
                    width: "100%",
                    maxWidth: "500px",
                }}
            >
                {/* Línea vertical */}
                <Box
                    sx={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "2px",
                        height: "100%",
                        backgroundColor: "divider",
                    }}
                />

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
                                minHeight: "60px",
                            }}
                        >
                            {/* ICONO IZQUIERDA */}
                            <Box
                                sx={{
                                    position: "absolute",
                                   left: "calc(50% - 100px)",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={event.icon}
                                    alt={event.title}
                                    sx={{
                                        width: "80px",
                                        height: "80px",
                                        opacity: 0.8,
                                         mixBlendMode: "multiply",
                                    }}
                                />
                            </Box>

                            {/* PUNTO */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    top: "50%",
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    backgroundColor: "primary.main",
                                }}
                            />

                            {/* TEXTO DERECHA */}
                            <Box
                                sx={{
                                    position: "relative",
                                    ml: "60%",
                                    textAlign: "left",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "0.8rem",
                                        letterSpacing: "2px",
                                        color: "text.secondary",
                                    }}
                                >
                                    {event.time}
                                </Typography>

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