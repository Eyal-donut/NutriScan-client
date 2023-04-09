import { useLoggedUserContext } from "../context/loggedUserContext";
import { newUser } from "../constants/constants";

export const useLoggedUser = () => {
  const { loggedUser, setLoggedUser, setIsLoggedUser } = useLoggedUserContext();

  const setNewUser = () => {
  
    localStorage.setItem("loggedUser", JSON.stringify(newUser));
    setLoggedUser(newUser);
    return loggedUser;
  };

  const setExistingUser = (existingUser) => {
    localStorage.setItem("loggedUser", JSON.stringify(existingUser));
    setLoggedUser(existingUser);
    setIsLoggedUser(true)
    console.log(loggedUser)
    return loggedUser;
  };

  const setLoggedUserFromLocal = () => {
    const localLoggedUser = localStorage.getItem("loggedUser");
    if (localLoggedUser) {
      const fetchedFromLocal = JSON.parse(localLoggedUser);
      setLoggedUser(fetchedFromLocal);
      setIsLoggedUser(true)
    }
  };

  const updateLocalAndLoggedUser = (section, key, value) => {
    let updatedUser = {};

    if (section) {
      console.log("section");
      updatedUser = {
        ...loggedUser,
        [section]: {
          ...loggedUser[section],
          [key]: value,
        },
      };
      setLoggedUser(updatedUser);
    } else if (key === "singleProduct") {
      updatedUser = {
        ...loggedUser,
        products: [...loggedUser.products, value],
      };
      setLoggedUser(updatedUser);
    } else if (key === "allProducts") {
      updatedUser = {
        ...loggedUser,
        products: value,
      };
      setLoggedUser(updatedUser);
    } else if (key) {
      updatedUser = {
        ...loggedUser,
        [key]: value,
      };
      setLoggedUser(updatedUser);
    }
    console.log(loggedUser);
    return loggedUser;
  };
  
  return {
    setNewUser,
    setExistingUser,
    updateLocalAndLoggedUser,
    setLoggedUserFromLocal,
  };
};
