import ThemeProvider from "@mui/system/ThemeProvider";

import { render } from "@testing-library/react";
import { theme } from "../theme";

import { createStore } from "../store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

const store = createStore;
const persistor = persistStore(store);

const AllTheProviders = ({ children }: any) => {
  return (
    <Provider {...{ store }}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

const customRender = (ui: any, options: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
