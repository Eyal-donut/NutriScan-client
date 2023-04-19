import { useLocalStorage } from "./useLocalStorage";
import { getProduct } from "../API/productsApi";
import { useProductContext } from "../context/ProductContext";
import { useLoggedUser } from "./useLoggedUser";
import { useLoggedUserContext } from "../context/loggedUserContext";

export const useBarcodeAndProduct = () => {
  const { loggedUser } = useLoggedUserContext();
  const { setLocalStorageItem } = useLocalStorage();
  const {
    setCurrentProduct,
    setProductSource,
    currentProduct,
    setIsProductFound,
  } = useProductContext();
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

  const getFromLocalAndSetCurrent = (barcode) => {
    const product = getFromLoggedUserProducts(barcode);
    setProductStates(product);
    setLocalStorageItem("currentProduct", product);
    setLocalStorageItem("isProductFound", { state: true });
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
    getProductAndSetCurrent,
    updateProductAndSetCurrent,
    updateMyScanCard,
    getFromLocalAndSetCurrent,
  };
};
