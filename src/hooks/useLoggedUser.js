import { useLoggedUserContext } from "../context/loggedUserContext";
import { newUser } from "../constants/constants";
import { useLocalStorage } from "./useLocalStorage";

export const useLoggedUser = () => {
  const { loggedUser, setLoggedUser, setIsLoggedUser } = useLoggedUserContext();
  const { setLocalStorageItem, getLocalStorageItem } = useLocalStorage();

  const setNewUser = () => {
    setLocalStorageItem("loggedUser", newUser);
    setLoggedUser(newUser);
    return loggedUser;
  };

  const setExistingUser = (existingUser) => {
    setLocalStorageItem("loggedUser", existingUser);
    setLoggedUser(existingUser);
    setIsLoggedUser(true);
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

    if (section !== undefined) {
      updatedUser = {
        ...loggedUser,
        [section]: {
          ...loggedUser[section],
          [key]: value,
        },
      };
      setLoggedUser(updatedUser);
      setLocalStorageItem("loggedUser", updatedUser);
      return;
    }
    if (key === "singleProduct") {
      const existingProduct = loggedUser.products.find(
        (prod) => prod.code === value.code
      );
      if (existingProduct) {
        const productsUpdate = loggedUser.products.filter(
          (prod) => prod.code !== existingProduct.code
        );
        productsUpdate.push(getLocalStorageItem("currentProduct"));
        updatedUser = {
          ...loggedUser,
          products: productsUpdate,
        };
      } else {
        updatedUser = {
          ...loggedUser,
          products: [...loggedUser.products, value],
        };
      }
      setLoggedUser(updatedUser);
      setLocalStorageItem("loggedUser", updatedUser);
      return;
    }
    if (key === "allProducts") {
      updatedUser = {
        ...loggedUser,
        products: value,
      };
      setLoggedUser(updatedUser);
      setLocalStorageItem("loggedUser", updatedUser);
      return;
    }
    if (key) {
      updatedUser = {
        ...loggedUser,
        [key]: value,
      };
      setLoggedUser(updatedUser);
      setLocalStorageItem("loggedUser", updatedUser);
      return;
    }
  };

  return {
    setNewUser,
    setExistingUser,
    updateLocalAndLoggedUser,
    setLoggedUserFromLocal,
  };
};
