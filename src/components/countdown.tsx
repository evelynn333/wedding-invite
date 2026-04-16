import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";

const WEDDING_DATE = dayjs("2026-09-05T00:00:00");

const calculateTimeLeft = () => {
    const now = dayjs();
    const diff = WEDDING_DATE.diff(now);

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
};

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const items = [
        { label: "DÍAS", value: timeLeft.days },
        { label: "HORAS", value: timeLeft.hours },
        { label: "MIN", value: timeLeft.minutes },
        { label: "SEG", value: timeLeft.seconds },
    ];

    return (
        <Box
            sx={{
                textAlign: "center",
                my: { xs: 2, md: 10 },
            }}
        >

            {/* Contador */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 2, md: 4 },
                }}
            >
                {items.map((item, index) => (
                    <Box key={index} sx={{ textAlign: "center" }}>
                        <motion.div
                            key={item.value}
                            initial={{ opacity: 0.6, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Número */}
                            <Typography
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontSize: { xs: "2rem", md: "3rem" },
                                    fontWeight: 500,
                                }}
                            >
                                {item.value}
                            </Typography>

                            {/* Línea decorativa */}
                            <Box
                                sx={{
                                    width: "30px",
                                    height: "1px",
                                    backgroundColor: 'divider',
                                    margin: "6px auto",
                                }}
                            />

                            {/* Label */}
                            <Typography
                                sx={{
                                    fontSize: "0.7rem",
                                    letterSpacing: "2px",
                                    color: "text.secondary",
                                }}
                            >
                                {item.label}
                            </Typography>
                        </motion.div>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
