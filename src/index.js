import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./constants/styleConstants.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {  LoginAndRegisterPagesProvider } from "./context/LoginAndRegisterPageContext";
import { ErrorMessageProvider } from "./context/ErrorMessageContext";
import { LoggedUserProvider } from "./context/loggedUserContext";
import { SpinnerProvider } from "./context/SpinnerContext";
import { ProductProvider } from "./context/ProductContext";
import { CameraProvider } from "./context/CameraContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginAndRegisterPagesProvider>
      <ErrorMessageProvider>
        <LoggedUserProvider>
          <SpinnerProvider>
            <ProductProvider>
              <CameraProvider>
                <App />
              </CameraProvider>
            </ProductProvider>
          </SpinnerProvider>
        </LoggedUserProvider>
      </ErrorMessageProvider>
    </LoginAndRegisterPagesProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
