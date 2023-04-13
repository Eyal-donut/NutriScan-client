import { useLocalStorage } from "./useLocalStorage";
import { getProduct } from "../API/productsApi";
import { useProductContext } from "../context/ProductContext";

export const useBarcodeAndProduct = () => {
  const {
    setCurrentProduct,
    setProductSource,
    setIsProductFound,
  } = useProductContext();
  const { setLocalStorageItem, getLocalStorageItem, getItemProperty } =
    useLocalStorage();

  const setProductStates = (product) => {
    setProductSource(product.source);
    setCurrentProduct(product);
    setIsProductFound(true);
  };

  const getFromLocalUserProducts = (barcode) => {
    console.log(typeof barcode)
    const products = getItemProperty("loggedUser", "products");
    const product = products.find((prod) => prod.code === barcode);
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

  const updateProduct = (key) => {
    const product = getLocalStorageItem("currentProduct");
    if (key === "isLiked") {
      product.isLiked = !product.isLiked;
    }
    setLocalStorageItem("currentProduct", product);
    setCurrentProduct(product);
  };

  return {
    getProductAndSetCurrent,
    getProductFromLocalAndSetStates,
    updateProduct,
  };
};
