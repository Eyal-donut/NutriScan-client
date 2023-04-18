import { createSettingsArray } from "./utils/createUserSettings";
import { useState } from "react";

export const useUserSettings = () => {
  const [isPreferencesSet, setIsPreferencesSet] = useState(false);
  const [isProductMatch, setIsProductMatch] = useState(true);
  const [dietPreferences, setDietPreferences] = useState(null);
  const [environmentPreferences, setEnvironmentPreferences] = useState(null);
  const [nutritionPreferences, setNutritionPreferences] = useState(null);

  const checkProductMatch = (product, user) => {
    const userCategoriesArray = createSettingsArray(undefined, user).map(
      (category) => category.value
    );
    const userOptionsArray = userCategoriesArray.flat();
    const productCategoriesArray = createSettingsArray(product, undefined);
    console.log(productCategoriesArray);

    const allResults = [];

    productCategoriesArray.forEach((productCategory) => {
      const categoryName = productCategory.name;

      const productOptionsArray = productCategory.value;

      const matchesArray = [];
      const notMatchesArray = [];
      const unknownArray = [];

      for (const productOption of productOptionsArray) {
        const examinedUserOption = userOptionsArray.find(
          (userOption) => userOption.name === productOption.name
        );

        const optionResult = {
          optionName: examinedUserOption.name,
          userValue: examinedUserOption.value,
          productValue: productOption.value,
          isMatch:
            examinedUserOption.value === false
              ? null
              : examinedUserOption.value === 0
              ? null
              : productOption.value === "Unknown"
              ? "Unknown"
              : examinedUserOption.value === true &&
                productOption.value === true
              ? true
              : examinedUserOption.value !== true &&
                examinedUserOption.value !== false &&
                examinedUserOption.value !== 0 &&
                examinedUserOption.value >= productOption.value
              ? true
              : false,
        };
        if (optionResult.isMatch == null) {
        } else if (optionResult.isMatch === true) {
          matchesArray.push(optionResult);
        } else if (optionResult.isMatch === false) {
          notMatchesArray.push(optionResult);
        } else {
          unknownArray.push(optionResult);
        }
      }
      const categoryResult = {
        categoryName,
        matchingOptions: matchesArray,
        notMatchingOptions: notMatchesArray,
        unknownOptions: unknownArray,
      };

      //setting is match for a category and the isProductMatch state
      if (
        notMatchesArray.length === 0 &&
        matchesArray.length === 0 &&
        unknownArray.length === 0
      ) {
        categoryResult.isMatch = "no filters";
        setIsProductMatch("no filters");
      } else if (notMatchesArray.length > 0) {
        categoryResult.isMatch = false;
        isProductMatch !== false && setIsProductMatch(false);
      } else if (unknownArray.length > 0) {
        categoryResult.isMatch = "Unknown";
        isProductMatch !== "Unknown" && setIsProductMatch("Unknown");
      } else {
        categoryResult.isMatch = true;
      }

      //setting the state
      categoryName === "Diet Preferences"
        ? setDietPreferences(categoryResult)
        : categoryName === "Environment Preferences"
        ? setEnvironmentPreferences(categoryResult)
        : setNutritionPreferences(categoryResult);

      setIsPreferencesSet(true);

      allResults.push(categoryResult);
    });
    console.log(allResults);
  };

  return {
    createSettingsArray,
    checkProductMatch,
    nutritionPreferences,
    environmentPreferences,
    dietPreferences,
    isProductMatch,
    isPreferencesSet,
  };
};
