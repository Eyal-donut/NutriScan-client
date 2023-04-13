import ProductCardMain from "../../components/ProductCardMain/ProductCardMain";
import IsMatchBar from "../../components/IsMatchBar/IsMatchBar";
import ProductNotFound from "../../components/ProductNotFound/ProductNotFound";
import { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import { useBarcodeAndProduct } from "../../hooks/useBarcodeAndProduct";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const ProductPage = () => {
  const { isProductFound } = useProductContext();
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { getProductFromLocalAndSetStates } = useBarcodeAndProduct();
  const { updateLocalAndLoggedUser } = useLoggedUser();
  const { getLocalStorageItem } = useLocalStorage();

  useEffect(() => {
    checkCameraAndRefresh();
    getProductFromLocalAndSetStates();

    if (isProductFound) {
      return () => {
        updateLocalAndLoggedUser(
          undefined,
          "singleProduct",
          getLocalStorageItem("currentProduct")
        );
      };
    }
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
      {!isProductFound && <ProductNotFound />}
    </>
  );
};
export default ProductPage;
