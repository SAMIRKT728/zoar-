import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppMui } from "./Mui/AppMui.jsx";
import { CssBaseline } from "@mui/material"; // Importa CssBaseline


//import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppMui>
      <CssBaseline /> {/* Agrega CssBaseline aquí */}
     <App />
    </AppMui>
    </BrowserRouter>
  </React.StrictMode>,
);
  