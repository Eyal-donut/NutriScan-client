import ProductCardMain from "../../components/ProductCard/ProductCardMain/ProductCardMain";
import IsMatchBar from "../../components/IsMatchBar/IsMatchBar";
import ProductNotFound from "../../components/ProductNotFound/ProductNotFound";
import { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import { useBarcodeAndProduct } from "../../hooks/useBarcodeAndProduct";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ProductPageHeader from "../../components/ProductPageHeader/ProductPageHeader";

const ProductPage = () => {
  const { isProductFound } = useProductContext();
  
  const { getProductFromLocalAndSetStates } = useBarcodeAndProduct();
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { updateLocalAndLoggedUser } = useLoggedUser();
  const { getLocalStorageItem } = useLocalStorage();

  useEffect(() => {
    checkCameraAndRefresh();
    getProductFromLocalAndSetStates();

    return () => {
        if (isProductFound) {
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
        <ProductPageHeader/>
          <IsMatchBar />
          <ProductCardMain />
          <div style={{width: "100%", height:"200vh"}}/>
        </>
      )}
      {!isProductFound && <ProductNotFound />}
    </>
  );
};
export default ProductPage;
