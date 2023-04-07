import { useState, createContext, useContext } from "react";

const LoginPageDisplayContext = createContext();

const LoginPageDisplayProvider = ({ children }) => {
  const [isLoginPageDisplay, setIsLoginPageDisplay] = useState(false);

  return (
    <LoginPageDisplayContext.Provider
      value={{
        isLoginPageDisplay,
        setIsLoginPageDisplay,
      }}
    >
      {children}
    </LoginPageDisplayContext.Provider>
  );
};

export const useLoginPageDisplayContext = () => {
  return useContext(LoginPageDisplayContext)
}

export {LoginPageDisplayProvider}