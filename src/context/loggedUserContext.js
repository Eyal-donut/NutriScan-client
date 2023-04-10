import { useState, createContext, useContext } from "react";

const LoggedUserContext = createContext();

const LoggedUserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({});
  const [isLoggedUser, setIsLoggedUser] = useState(null);

  return (
    <LoggedUserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        isLoggedUser,
        setIsLoggedUser,
      }}
    >
      {children}
    </LoggedUserContext.Provider>
  );
};

export const useLoggedUserContext = () => {
  return useContext(LoggedUserContext);
};

export { LoggedUserProvider };
