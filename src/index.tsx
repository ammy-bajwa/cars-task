import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "@mui/system/ThemeProvider";

import { theme } from "./theme";

import "./styles/index.css";
import { createStore } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore;

root.render(
  <React.StrictMode>
    <Provider store={{ ...store }}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
