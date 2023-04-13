import { useLoggedUserContext } from "../context/loggedUserContext";
import { newUser } from "../constants/constants";
import { useLocalStorage } from "./useLocalStorage";

export const useLoggedUser = () => {
  const { loggedUser, setLoggedUser, setIsLoggedUser } = useLoggedUserContext();
  const { setLocalStorageItem } = useLocalStorage();

  const setNewUser = () => {
    setLocalStorageItem("loggedUser", newUser);
    setLoggedUser(newUser);
    return loggedUser;
  };

  const setExistingUser = (existingUser) => {
    setLocalStorageItem("loggedUser", existingUser);
    setLoggedUser(existingUser);
    setIsLoggedUser(true);
    console.log(loggedUser);
    return loggedUser;
  };

  const setLoggedUserFromLocal = () => {
    const localLoggedUser = localStorage.getItem("loggedUser");
    if (localLoggedUser) {
      const fetchedFromLocal = JSON.parse(localLoggedUser);
      setLoggedUser(fetchedFromLocal);
      setIsLoggedUser(true);
    } else setIsLoggedUser(false);
  };

  const updateLocalAndLoggedUser = (section, key, value) => {
    let updatedUser = {};

    if (section) {
      updatedUser = {
        ...loggedUser,
        [section]: {
          ...loggedUser[section],
          [key]: value,
        },
      };
    } else if (key === "singleProduct") {
      updatedUser = {
        ...loggedUser,
        products: [...loggedUser.products, value],
      };
    } else if (key === "allProducts") {
      updatedUser = {
        ...loggedUser,
        products: value,
      };
    } else if (key) {
      updatedUser = {
        ...loggedUser,
        [key]: value,
      };
    }
    setLoggedUser(updatedUser);
    setLocalStorageItem("loggedUser", updatedUser);
    return loggedUser;
  };

  return {
    setNewUser,
    setExistingUser,
    updateLocalAndLoggedUser,
    setLoggedUserFromLocal,
  };
};
