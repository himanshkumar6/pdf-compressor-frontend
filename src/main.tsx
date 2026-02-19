import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeProvider";
import "./index.css";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2500,
            style: {
              background: "var(--toast-bg)",
              color: "var(--toast-text)",
              border: "1px solid var(--toast-border)",
              borderRadius: "16px",
              padding: "14px 16px",
              boxShadow: "var(--shadow-lg)",
              fontWeight: 700,
            },
            success: {
              iconTheme: {
                primary: "#22d3ee",
                secondary: "#0b0e14",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#0b0e14",
              },
            },
          }}
        />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
