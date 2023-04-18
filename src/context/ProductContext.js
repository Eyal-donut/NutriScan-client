import { useState, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { getLocalStorageItem } = useLocalStorage();

  const [currentProduct, setCurrentProduct] = useState(() => {
    const localCurrentProduct = getLocalStorageItem("currentProduct");
    if (localCurrentProduct) {
      return localCurrentProduct;
    } else return {};
  });

  const [productSource, setProductSource] = useState(() => {
    const localCurrentProduct = getLocalStorageItem("currentProduct");
    if (localCurrentProduct) {
      return localCurrentProduct.source;
    } else return "";
  });

  const [isProductFound, setIsProductFound] = useState(() => {
    const productFoundState = getLocalStorageItem("isProductFound");
    if (productFoundState) {
      if (productFoundState.state) return true;
    }
    return false;
  });

  return (
    <ProductContext.Provider
      value={{
        currentProduct,
        setCurrentProduct,
        productSource,
        setProductSource,
        isProductFound,
        setIsProductFound
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider };
