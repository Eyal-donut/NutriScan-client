import { useLocalStorage } from "./useLocalStorage";
import { getProduct } from "../API/productsApi";
import { useProductContext } from "../context/ProductContext";
import { useLoggedUser } from "./useLoggedUser";
import { useState } from "react";
import { useLoggedUserContext } from "../context/loggedUserContext";

export const useBarcodeAndProduct = () => {
  const { loggedUser } = useLoggedUserContext();
  const { setLocalStorageItem, getLocalStorageItem } = useLocalStorage();
  const [isProductFound, setIsProductFound] = useState(() => {
    const productFoundState = getLocalStorageItem("isProductFound");
    if (productFoundState) {
      if (productFoundState.state) return true;
    }
    return false;
  });
  const { setCurrentProduct, setProductSource, currentProduct } =
    useProductContext();
  const { updateLocalAndLoggedUser } = useLoggedUser();

  const setProductStates = (product) => {
    setProductSource(product.source);
    setCurrentProduct(product);
    setIsProductFound(true);
  };

  const getFromLoggedUserProducts = (barcode) => {
    const product = loggedUser.products.find(
      (prod) => Number(prod.code) === barcode
    );
    if (product) {
      return product;
    }
  };

  const getProductAndSetCurrent = async (barcode) => {
    let result;
    const product = getFromLoggedUserProducts(barcode);
    if (product) {
      result = product;
    } else {
      result = await getProduct(barcode);
    }
    if (result) {
      setProductStates(result);
      setLocalStorageItem("currentProduct", result);
      setLocalStorageItem("isProductFound", { state: true });
    }
    if (!result) {
      setLocalStorageItem("isProductFound", { state: false });
      setIsProductFound(false);
    }
  };

  // const getProductFromLocalAndSetStates = () => {
  //   const productFoundState = getLocalStorageItem("isProductFound");
  //   if (productFoundState) {
  //     if (productFoundState.state) {
  //       const product = getLocalStorageItem("currentProduct");
  //       if (product) setProductStates(product);
  //     }
  //   }
  // };

  const updateProduct = (product, key, value) => {
    let update;
    if (key === "isLiked") {
      update = { ...product, isLiked: value };
    }
    if (key === "delete") {
      update = { ...product, deleted: true };
    }
    return update;
  };

  const updateProductAndSetCurrent = (product, key, value) => {
    const update = updateProduct(product, key, value);
    setLocalStorageItem("currentProduct", update);
    setCurrentProduct(update);
  };

  const updateMyScanCard = (barcode, key, value) => {
    const product = getFromLoggedUserProducts(barcode);
    const updated = updateProduct(product, key, value);
    if (Number(currentProduct.code) === Number(barcode)) {
      updateProductAndSetCurrent(updated, key, value);
    }
    if (updated.code) {
      updateLocalAndLoggedUser(undefined, "singleProduct", updated);
    }
  };

  return {
    isProductFound,
    getProductAndSetCurrent,
    // getProductFromLocalAndSetStates,
    updateProductAndSetCurrent,
    updateMyScanCard,
  };
};
