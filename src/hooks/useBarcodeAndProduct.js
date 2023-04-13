import { useLocalStorage } from "./useLocalStorage";
import { getProduct } from "../API/productsApi";
import { useProductContext } from "../context/ProductContext";
import { constants } from "../constants/constants";

export const useBarcodeAndProduct = () => {
  const { setCurrentProduct, setProductSource, setIsProductFound } =
    useProductContext();
  const { setLocalStorageItem, getLocalStorageItem, getItemProperty } = useLocalStorage();

  const setProductStates = (product) => {
    setProductSource(product.source);
    setCurrentProduct(product);
    if (product.name === constants.PRODUCT_NOT_FOUND) {
      setIsProductFound(false);
    } else setIsProductFound(true);
  };

  const getFromLocalUserProducts = (barcode) => {
    const products = getItemProperty("loggedUser", "products");
    console.log(products)
    const product = products.find((prod) => {
      return prod.code === barcode 
    });
    if (product) {
      return product;
    }
  };

  const getProductAndSetCurrent = async (barcode) => {
    let result
    const product = getFromLocalUserProducts(barcode);
    if (product) {
      result = product
    } else {
      result = await getProduct(barcode);
    }
    setLocalStorageItem("currentProduct", result);
    setProductStates(result);
  };

  const getProductFromLocalAndSetStates = () => {
    const product = getLocalStorageItem("currentProduct");
    setProductStates(product);
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
