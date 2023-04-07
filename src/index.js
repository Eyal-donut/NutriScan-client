import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./constants/styleConstants.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { LoginPageDisplayProvider } from "./context/LoginPageDisplayContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginPageDisplayProvider>
      <App />
    </LoginPageDisplayProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
