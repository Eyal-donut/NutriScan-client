import ProductCardMain from "../../components/ProductCard/ProductCardMain/ProductCardMain";
import IsMatchBar from "../../components/IsMatchBar/IsMatchBar";
import ProductNotFound from "../../components/ProductNotFound/ProductNotFound";
import ProductPageHeader from "../../components/ProductPageHeader/ProductPageHeader";
import DietPreferences from "../../components/DietPreferences/DietPreferences";
import { useEffect } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import { useBarcodeAndProduct } from "../../hooks/useBarcodeAndProduct";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useUserSettings } from "../../hooks/useUserSettings/useUserSettings";
import { useLoggedUserContext } from "../../context/loggedUserContext";
import { useProductContext } from "../../context/ProductContext";

const ProductPage = () => {
  const { loggedUser } = useLoggedUserContext();
  const { currentProduct } = useProductContext();
  const { isProductFound } = useBarcodeAndProduct();
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { updateLocalAndLoggedUser } = useLoggedUser();
  const { getLocalStorageItem } = useLocalStorage();
  const {
    checkProductMatch,
    // nutritionPreferences,
    // environmentPreferences,
    dietPreferences,
    isProductMatch,
    isPreferencesSet
  } = useUserSettings();

  useEffect(() => {
    checkCameraAndRefresh();
    checkProductMatch(currentProduct, loggedUser);

    return () => {
      if (isProductFound) {
        const localProduct = getLocalStorageItem("currentProduct");
        if (!localProduct.deleted) {
          updateLocalAndLoggedUser(undefined, "singleProduct", localProduct);
          //! Add here api call to update the user
        }
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isProductFound ? (
        <>
          <ProductPageHeader />
          <IsMatchBar page="product" isMatch={isProductMatch} />
          <ProductCardMain page="product" />
          {isPreferencesSet && (
            <DietPreferences
              dietPreferences={dietPreferences}
            />
          )}
        </>
      ) : (
        <ProductNotFound />
      )}
    </>
  );
};
export default ProductPage;
