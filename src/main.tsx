import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import "@fontsource/playfair-display";
import "@fontsource/inter";
import { Router } from "./router";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router /> 
    </ThemeProvider>
  </React.StrictMode>
);