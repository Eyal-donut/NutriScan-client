// import { useEffect } from "react";
// import { getProduct } from "../../API/productsApi";
import { useEffect } from "react";
import ProductCardMain from "../../components/ProductCardMain/ProductCardMain";
import { useProductContext } from "../../context/ProductContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import IsMatchBar from "../../components/IsMatchBar/IsMatchBar";
import ContentWrap from "../../components/ContentWrap/ContentWrap";

const ProductPage = () => {
  const { setCurrentProduct } = useProductContext();
  const { getLocalStorageItem } = useLocalStorage();

  useEffect(() => {
    const currentProductLocal = getLocalStorageItem("currentProduct");
    setCurrentProduct(currentProductLocal);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Product Page</h1>
      <IsMatchBar />
      <ProductCardMain />
    </>
  );
};
export default ProductPage;
