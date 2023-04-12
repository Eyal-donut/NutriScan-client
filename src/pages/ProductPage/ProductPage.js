import { useEffect } from "react";
import ProductCardMain from "../../components/ProductCardMain/ProductCardMain";
import { useProductContext } from "../../context/ProductContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import IsMatchBar from "../../components/IsMatchBar/IsMatchBar";
import { useCheckCameraAndRefresh  } from "../../hooks/useCheckCameraAndRefresh ";

const ProductPage = () => {
  const { setCurrentProduct } = useProductContext();
  const { getLocalStorageItem } = useLocalStorage();
  const {checkCameraAndRefresh} = useCheckCameraAndRefresh()

  useEffect(() => {
    checkCameraAndRefresh()
    const currentProductLocal = getLocalStorageItem("currentProduct");
    setCurrentProduct(currentProductLocal);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <IsMatchBar />
      <ProductCardMain />
    </>
  );
};
export default ProductPage;
