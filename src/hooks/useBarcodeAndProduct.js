import { useLocalStorage } from "./useLocalStorage";
import { getProduct } from "../API/productsApi";
import { useProductContext } from "../context/ProductContext";
import { useLoggedUser } from "./useLoggedUser";
import { useState } from "react";

export const useBarcodeAndProduct = () => {
  const { setLocalStorageItem, getLocalStorageItem, getItemProperty } =
    useLocalStorage();
  const [isProductFound, setIsProductFound] = useState(() => {
    const productFoundState = getLocalStorageItem("isProductFound");
    if (productFoundState) {
      if (productFoundState.state) return true;
    }
    return false;
  });
  const { setCurrentProduct, setProductSource } = useProductContext();
  const { updateLocalAndLoggedUser } = useLoggedUser();

  const setProductStates = (product) => {
    setProductSource(product.source);
    setCurrentProduct(product);
    setIsProductFound(true);
  };

  const getFromLocalUserProducts = (barcode) => {
    const products = getItemProperty("loggedUser", "products");
    const product = products.find((prod) => Number(prod.code) === barcode);
    if (product) {
      return product;
    }
  };

  const getProductAndSetCurrent = async (barcode) => {
    let result;
    const product = getFromLocalUserProducts(barcode);
    if (product) {
      result = product;
    } else {
      result = await getProduct(barcode);
    }
    if (result) {
      setLocalStorageItem("currentProduct", result);
      setLocalStorageItem("isProductFound", { state: true });
      setProductStates(result);
    }
    if (!result) {
      setLocalStorageItem("isProductFound", { state: false });
      setIsProductFound(false);
    }
  };

  const getProductFromLocalAndSetStates = () => {
    const productFoundState = getLocalStorageItem("isProductFound");
    if (productFoundState) {
      if (productFoundState.state) {
        const product = getLocalStorageItem("currentProduct");
        if (product) setProductStates(product);
      }
    }
  };

  const updateProduct = (product, key, value) => {
    let update = product;
    if (key === "isLiked") {
      update = { ...update, isLiked: value };
    }
    if (key === "delete") {
      update.deleted = true;
    }
    return update;
  };

  const updateProductAndSetCurrent = (product, key, value) => {
    const update = updateProduct(product, key, value);
    setLocalStorageItem("currentProduct", update);
    setCurrentProduct(update);
  };

  const updateMyScanCard = async (barcode, key, value) => {
    const product = getFromLocalUserProducts(barcode);
    const updated = updateProduct(product, key, value);
    const localCurrentProductCode = getItemProperty("currentProduct", "code");
    if (Number(localCurrentProductCode) === Number(barcode)) {
      updateProductAndSetCurrent(updated, key, value);
    }
    updateLocalAndLoggedUser(undefined, "singleProduct", updated);
  };

  return {
    isProductFound,
    getProductAndSetCurrent,
    getProductFromLocalAndSetStates,
    updateProductAndSetCurrent,
    updateMyScanCard,
  };
};
