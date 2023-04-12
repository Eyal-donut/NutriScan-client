// import { useEffect } from "react";
// import { getProduct } from "../../API/productsApi";
import { useEffect } from "react";
import ProductCardMain from "../../components/ProductCardMain/ProductCardMain";
import { useProductContext } from "../../context/ProductContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const ProductPage = () => {
  const { setCurrentProduct, currentProduct } = useProductContext();
  const { getLocalStorageItem } = useLocalStorage();

  useEffect(() => {
    const currentProductLocal = getLocalStorageItem("currentProduct");
    setCurrentProduct(currentProductLocal);
    
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Product Page</h1>
      <ProductCardMain />
    </>
  );
};
export default ProductPage;
