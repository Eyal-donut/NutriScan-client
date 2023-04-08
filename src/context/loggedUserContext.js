import { useState, createContext, useContext } from "react";

const LoggedUserContext = createContext();

const LoggedUserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(false);

  return (
    <LoggedUserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
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
