import { Box, Typography } from "@mui/material";

export const Hero = () => {
    return (
        <Box sx={{ textAlign: "center" }}>
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
                    fontSize: "1.5rem",
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
    );
};
