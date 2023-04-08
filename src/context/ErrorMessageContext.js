import { useState, createContext, useContext } from "react";

const ErrorMessageContext = createContext();

const ErrorMessageProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <ErrorMessageContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </ErrorMessageContext.Provider>
  );
};

export const useErrorMessageContext = () => {
  return useContext(ErrorMessageContext)
}

export {ErrorMessageProvider}