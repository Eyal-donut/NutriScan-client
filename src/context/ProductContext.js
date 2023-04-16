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

  return (
    <ProductContext.Provider
      value={{
        currentProduct,
        setCurrentProduct,
        productSource,
        setProductSource,
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
