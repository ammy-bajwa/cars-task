import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "@mui/system/ThemeProvider";

import { theme } from "./theme";

import { createStore } from "./store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/index.css";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore;
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
