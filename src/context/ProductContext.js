import { useState, createContext, useContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <ProductContext.Provider
      value={{
        currentProduct,
        setCurrentProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext)
}

export {ProductProvider}