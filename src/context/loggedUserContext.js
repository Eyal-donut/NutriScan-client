import { useState, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LoggedUserContext = createContext();

const LoggedUserProvider = ({ children }) => {
  const { getLocalStorageItem } = useLocalStorage();
  const [loggedUser, setLoggedUser] = useState(() => {
    const localUser = getLocalStorageItem("loggedUser");
    if (localUser) {
      return localUser;
    } else return {};
  });
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
