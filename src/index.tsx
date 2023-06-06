import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./constants/styleConstants.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { LoginAndRegisterPagesProvider } from "./context/LoginAndRegisterPageContext";
import { ErrorMessageProvider } from "./context/ErrorMessageContext";
import { LoggedUserProvider } from "./context/loggedUserContext";
import { SpinnerProvider } from "./context/SpinnerContext";
import { ProductProvider } from "./context/ProductContext";
import { CameraProvider } from "./context/CameraContext";
import { MenuDisplayProvider } from "./context/MenuDisplayContext";

const root: HTMLElement | null = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <LoginAndRegisterPagesProvider>
      <ErrorMessageProvider>
        <LoggedUserProvider>
          <SpinnerProvider>
            <ProductProvider>
              <CameraProvider>
                <MenuDisplayProvider>
                  <App />
                </MenuDisplayProvider>
              </CameraProvider>
            </ProductProvider>
          </SpinnerProvider>
        </LoggedUserProvider>
      </ErrorMessageProvider>
    </LoginAndRegisterPagesProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
