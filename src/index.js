import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./constants/styleConstants.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { LoginPageDisplayProvider } from "./context/LoginPageDisplayContext";
import { ErrorMessageProvider } from "./context/ErrorMessageContext";
import { LoggedUserProvider } from "./context/loggedUserContext";
import { SpinnerProvider } from "./context/SpinnerContext";
import { ProductProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginPageDisplayProvider>
      <ErrorMessageProvider>
        <LoggedUserProvider>
          <SpinnerProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </SpinnerProvider>
        </LoggedUserProvider>
      </ErrorMessageProvider>
    </LoginPageDisplayProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
