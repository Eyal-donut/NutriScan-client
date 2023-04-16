import { createSettingsArray } from "./utils/createUserSettings";
import { useState } from "react";

export const useUserSettings = () => {
  const [isProductMatch, setIsProductMatch] = useState(true);
  const [dietPreferences, setDietPreferences] = useState([]);
  const [environmentPreferences, setEnvironmentPreferences] = useState([]);
  const [nutritionPreferences, setNutritionPreferences] = useState([]);

  const checkProductMatch = (product, user) => {
    const userCategoriesArray = createSettingsArray(undefined, user).map(
      (category) => category.value
    );
    const userOptionsArray = userCategoriesArray.flat();
    const productCategoriesArray = createSettingsArray(product, undefined);

    const allResults = [];

    productCategoriesArray.forEach((productCategory) => {
      const categoryName = productCategory.name;

      const productOptionsArray = productCategory.value;

      const matchesArray = [];
      const notMatchesArray = [];
      const unknownArray = [];

      for (const productOption of productOptionsArray) {
        const examinedOption = userOptionsArray.find(
          (userOption) => userOption.name === productOption.name
        );
        const optionResult = {
          optionName: examinedOption.name,
          isMatch:
            examinedOption.value === false
              ? true
              : examinedOption.value === 0
              ? true
              : productOption.value === "Unknown" || product.value === -1
              ? "Unknown"
              : examinedOption.value === true && productOption.value === false
              ? true
              : examinedOption.value !== true &&
                examinedOption.value !== false &&
                examinedOption.value !== 0 &&
                examinedOption.value <= productOption.value
              ? true
              : false,
        };
        if (optionResult.isMatch === true) {
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

      //setting is match and the isProductMatch state
      if (notMatchesArray.length > 0) {
        categoryResult.isMatch = false;
        isProductMatch !== false && setIsProductMatch(false);
      } else if (unknownArray.length > 0) {
        categoryResult.isMatch = "Unknown";
        isProductMatch !== false && setIsProductMatch("Unknown");
      } else {
        categoryResult.isMatch = true;
      }

      //setting the state
      categoryName === "Diet Preferences"
        ? setDietPreferences(categoryResult)
        : categoryName === "Environment Preferences"
        ? setEnvironmentPreferences(categoryResult)
        : setNutritionPreferences(categoryResult);

      allResults.push(categoryResult);
    });
    console.log(allResults)
  };

  return {
    createSettingsArray,
    checkProductMatch,
    nutritionPreferences,
    environmentPreferences,
    dietPreferences,
    isProductMatch,
  };
};
