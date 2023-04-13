import { useEffect } from "react";
import ProductCardMain from "../../components/ProductCardMain/ProductCardMain";
import { useProductContext } from "../../context/ProductContext";
import IsMatchBar from "../../components/IsMatchBar/IsMatchBar";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import { useBarcodeAndProduct } from "../../hooks/useBarcodeAndProduct";

const ProductPage = () => {
  const { isProductFound } = useProductContext();
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { getProductFromLocalAndSetStates } = useBarcodeAndProduct();

  useEffect(() => {
    // checkCameraAndRefresh()
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
    </>
  );
};
export default ProductPage;
