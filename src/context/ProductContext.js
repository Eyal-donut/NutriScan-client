import { useState, createContext, useContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [productSource, setProductSource] = useState("");
  const [productFound, setProductFound] = useState(true);

  return (
    <ProductContext.Provider
      value={{
        currentProduct,
        setCurrentProduct,
        productSource,
        setProductSource,
        productFound,
        setProductFound
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
