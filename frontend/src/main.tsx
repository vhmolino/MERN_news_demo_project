import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SnackbarProvider } from "notistack";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.tsx";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          <Layout>
            <App />
          </Layout>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
