import { useState, createContext, useContext } from "react";

const LoginAndRegisterPagesDisplayContext = createContext();

const LoginAndRegisterPagesProvider = ({ children }) => {
  const [isLoginPageDisplay, setIsLoginPageDisplay] = useState(false);
  const [isLoginOrRegister, setIsLoginOrRegister] = useState(null)

  return (
    <LoginAndRegisterPagesDisplayContext.Provider
      value={{
        isLoginPageDisplay,
        setIsLoginPageDisplay,
        isLoginOrRegister,
        setIsLoginOrRegister
      }}
    >
      {children}
    </LoginAndRegisterPagesDisplayContext.Provider>
  );
};

export const useLoginAndRegisterPagesDisplayContext = () => {
  return useContext(LoginAndRegisterPagesDisplayContext);
};

export { LoginAndRegisterPagesProvider };
