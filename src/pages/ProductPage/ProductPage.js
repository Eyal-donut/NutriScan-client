import ProductCardMain from "../../components/page specific components/ProductPageComponents/ProductCardMain/ProductCardMain";
import IsMatchBar from "../../components/global components/IsMatchBar/IsMatchBar";
import ProductNotFound from "../../components/page specific components/ProductPageComponents/ProductNotFound/ProductNotFound";
import ProductPageHeader from "../../components/page specific components/ProductPageComponents/ProductPageHeader/ProductPageHeader";
import DietPrefsSection from "../../components/page specific components/ProductPageComponents/DietPrefsSection/DietPrefsSection";
import NutritionPrefsSection from "../../components/page specific components/ProductPageComponents/nutriotionPrefsSection/NutritionPrefsSection";
import EnvironmentPrefsSection from "../../components/page specific components/ProductPageComponents/EnvirnomentPrefsSection/EnvironmentPrefsSection";
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
    nutritionPreferences,
    environmentPreferences,
    dietPreferences,
    isProductMatch,
    isPreferencesSet,
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
            <>
              <DietPrefsSection preferences={dietPreferences} />
              <NutritionPrefsSection preferences={nutritionPreferences} />
              <EnvironmentPrefsSection preferences={environmentPreferences} />
            </>
          )}
        </>
      ) : (
        <ProductNotFound />
      )}
    </>
  );
};
export default ProductPage;
