import ProductCardMain from "../../components/page specific components/ProductPageComponents/ProductCardMain/ProductCardMain";
import IsMatchBar from "../../components/global components/IsMatchBar/IsMatchBar";
import ProductNotFound from "../../components/page specific components/ProductPageComponents/ProductNotFound/ProductNotFound";
import ProductPageHeader from "../../components/page specific components/ProductPageComponents/ProductPageHeader/ProductPageHeader";
import DietPrefsSection from "../../components/page specific components/ProductPageComponents/DietPrefsSection/DietPrefsSection";
import NutritionPrefsSection from "../../components/page specific components/ProductPageComponents/nutriotionPrefsSection/NutritionPrefsSection";
import EnvironmentPrefsSection from "../../components/page specific components/ProductPageComponents/EnvirnomentPrefsSection/EnvironmentPrefsSection";
import { useEffect } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useUserSettings } from "../../hooks/useUserSettings/useUserSettings";
import { useLoggedUserContext } from "../../context/loggedUserContext";
import { useProductContext } from "../../context/ProductContext";
import { updateUser } from "../../API/usersApi";
import { getAuthCookie } from "../../coockieManager/coockieManager";

const ProductPage = () => {
  const { loggedUser } = useLoggedUserContext();
  const { currentProduct, isProductFound } = useProductContext();
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { updateLocalAndLoggedUser } = useLoggedUser();
  const { getLocalStorageItem } = useLocalStorage();
  const {
    checkProductMatch,
    isPreferencesSet,
    nutritionPreferences,
    environmentPreferences,
    dietPreferences,
    isProductMatch,
  } = useUserSettings();

  useEffect(() => {
    checkCameraAndRefresh();
    if (isProductFound) {
      checkProductMatch(currentProduct, loggedUser);
      updateLocalAndLoggedUser(undefined, "singleProduct", currentProduct);
    }

    return async () => {
      if (isProductFound) {
        const localProduct = getLocalStorageItem("currentProduct");
        if (!localProduct.deleted) {
          updateLocalAndLoggedUser(undefined, "singleProduct", localProduct);

          if (loggedUser.name) {
            updateUser(getAuthCookie(), loggedUser);
          }
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
