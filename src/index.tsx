import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const theme = createTheme({
  palette: {
    primary: green,
  },
  typography: {
    button: {
      fontWeight: 800,
      fontFamily: "Nanum Gothic",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
