import ProductCardMain from "../../components/ProductCardMain/ProductCardMain";
import IsMatchBar from "../../components/IsMatchBar/IsMatchBar";
import ProductNotFound from "../../components/ProductNotFound/ProductNotFound"
import { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import { useBarcodeAndProduct } from "../../hooks/useBarcodeAndProduct";

const ProductPage = () => {
  const { isProductFound } = useProductContext();
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { getProductFromLocalAndSetStates } = useBarcodeAndProduct();

  useEffect(() => {
    checkCameraAndRefresh()
    getProductFromLocalAndSetStates();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isProductFound && (
        <>
          <IsMatchBar />
          <ProductCardMain />
        </>
      )}
      {!isProductFound && <ProductNotFound/>}
    </>
  );
};
export default ProductPage;
