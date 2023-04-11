import { useLocalStorage } from "./useLocalStorage";
import { getProduct } from "../API/productsApi";
import { useProductContext } from "../context/ProductContext";

export const useBarcode = () => {
  const { setCurrentProduct } = useProductContext();
  const {setLocalStorageItem} = useLocalStorage()

  const getProductAndSetCurrent = async(barcode) => {
    const product = await getProduct(barcode);

    setLocalStorageItem("currentProduct", await product)
    setCurrentProduct(await product)
    
  };
  return {getProductAndSetCurrent}
};
