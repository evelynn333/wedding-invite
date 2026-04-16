import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import "@fontsource/playfair-display";
import "@fontsource/inter";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
            <Router />
        </ThemeProvider>
    </React.StrictMode>,
);
