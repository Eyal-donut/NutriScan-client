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

  const getFromUserProducts = () => {
    const user = getLocalStorageItem("loggedUser")
    const productsArray = user.productsArray
  }

  const getProductAndSetCurrent = async (barcode) => {
    const product = await getProduct(barcode);
    setLocalStorageItem("currentProduct", await product);
    setProductStates(await product);
  };

  const getProductFromLocalAndSetStates = () => {
    const product = getLocalStorageItem("currentProduct");
    setProductStates(product)
  };

  const updateProduct = (key) => {
    const product = getLocalStorageItem("currentProduct")
    if(key === "isLiked"){
      product.isLiked = !product.isLiked
    }
    setLocalStorageItem("currentProduct", product)
    setCurrentProduct(product)
  }

  return { getProductAndSetCurrent, getProductFromLocalAndSetStates, updateProduct };
};
