"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
require("./constants/styleConstants.css");
const App_1 = __importDefault(require("./App"));
const serviceWorkerRegistration = __importStar(require("./serviceWorkerRegistration"));
const LoginAndRegisterPageContext_1 = require("./context/LoginAndRegisterPageContext");
const ErrorMessageContext_1 = require("./context/ErrorMessageContext");
const loggedUserContext_1 = require("./context/loggedUserContext");
const SpinnerContext_1 = require("./context/SpinnerContext");
const ProductContext_1 = require("./context/ProductContext");
const CameraContext_1 = require("./context/CameraContext");
const MenuDisplayContext_1 = require("./context/MenuDisplayContext");
const root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <LoginAndRegisterPageContext_1.LoginAndRegisterPagesProvider>
      <ErrorMessageContext_1.ErrorMessageProvider>
        <loggedUserContext_1.LoggedUserProvider>
          <SpinnerContext_1.SpinnerProvider>
            <ProductContext_1.ProductProvider>
              <CameraContext_1.CameraProvider>
                <MenuDisplayContext_1.MenuDisplayProvider>
                  <App_1.default />
                </MenuDisplayContext_1.MenuDisplayProvider>
              </CameraContext_1.CameraProvider>
            </ProductContext_1.ProductProvider>
          </SpinnerContext_1.SpinnerProvider>
        </loggedUserContext_1.LoggedUserProvider>
      </ErrorMessageContext_1.ErrorMessageProvider>
    </LoginAndRegisterPageContext_1.LoginAndRegisterPagesProvider>
  </react_1.default.StrictMode>);
serviceWorkerRegistration.register();
