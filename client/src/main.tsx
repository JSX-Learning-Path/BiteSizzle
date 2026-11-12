import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/lilita-one/400.css";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/fredoka";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App.tsx";
import { theme } from "./theme/theme";
import { ProductsProvider } from "./context/ProductContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
