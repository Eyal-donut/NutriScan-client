import { useLocalStorage } from "./useLocalStorage";
import { getProduct } from "../API/productsApi";
import { useProductContext } from "../context/ProductContext";
import { constants } from "../constants/constants";

export const useBarcodeAndProduct = () => {
  
  const { setCurrentProduct, setProductSource, setIsProductFound } =
    useProductContext();
  const { setLocalStorageItem, getLocalStorageItem } = useLocalStorage();

  const setProductStates = (product) => {
    setProductSource(product.source);
    setCurrentProduct(product);
    if (product.name === constants.PRODUCT_NOT_FOUND) {
      setIsProductFound(false);
    } else setIsProductFound(true);
  };

  const getProductAndSetCurrent = async (barcode) => {
    const product = await getProduct(barcode);
    setLocalStorageItem("currentProduct", await product);
    setProductStates(await product);
  };

  const getProductFromLocalAndSetStates = () => {
    const product = getLocalStorageItem("currentProduct");
    setProductStates(product)
  };

  return { getProductAndSetCurrent, getProductFromLocalAndSetStates };
};
