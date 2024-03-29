import { useLoggedUserContext } from "../context/loggedUserContext";
import { NEW_USER } from "../constants/constants";
import { useLocalStorage } from "./useLocalStorage";

export const useLoggedUser = () => {
  const { loggedUser, setLoggedUser, setIsLoggedUser } = useLoggedUserContext();
  const { setLocalStorageItem, getItemProperty, getLocalStorageItem } =
    useLocalStorage();

  //This is new!
  const getLocalLoggedUser = () => {
    const localUser = getLocalStorageItem("loggedUser");
    if (localUser) {
      return localUser;
    }
    return {};
  };

  const setNewUser = () => {
    setLocalStorageItem("loggedUser", NEW_USER);
    setLoggedUser(NEW_USER);
    setIsLoggedUser(true);
  };

  const setExistingUser = (existingUser) => {
    setLocalStorageItem("loggedUser", existingUser);
    setLoggedUser(existingUser);
    setIsLoggedUser(true);
  };

  const setLoggedUserFromLocal = () => {
    const localLoggedUser = localStorage.getItem("loggedUser");
    if (localLoggedUser) {
      const fetchedFromLocal = JSON.parse(localLoggedUser);
      setLoggedUser(fetchedFromLocal);
      setIsLoggedUser(true);
    } else setIsLoggedUser(false);
  };

  const deleteLocalUserProduct = (barcode) => {
    const products = getItemProperty("loggedUser", "products");
    const filtered = products.filter((prod) => Number(prod.code) !== barcode);
    const updatedUser = {
      ...loggedUser,
      products: filtered,
    };
    setLoggedUser(updatedUser);
    setLocalStorageItem("loggedUser", updatedUser);
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
        productsUpdate.push(value);
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
    deleteLocalUserProduct,
    //This is new
    getLocalLoggedUser,
  };
};
