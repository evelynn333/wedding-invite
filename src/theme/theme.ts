import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#7A8F7B", // verde oliva elegante
        },
        secondary: {
            main: "#E8CFCB", // rosa empolvado
        },
        background: {
            default: "#F9F7F4", // blanco roto
            paper: "#FFFFFF",
        },
        text: {
            primary: "#2E2E2E",
        },
    },
    typography: {
        fontFamily: "Inter, sans-serif",
        h1: {
            fontFamily: "Playfair Display, serif",
            fontWeight: 500,
        },
        h2: {
            fontFamily: "Playfair Display, serif",
            fontWeight: 500,
        },
        h3: {
            fontFamily: "Playfair Display, serif",
        },
    },
    shape: {
        borderRadius: 12,
    },
});
