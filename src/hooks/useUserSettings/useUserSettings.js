import { createSettingsArray } from "./utils/createUserSettings";
import { getMatchFromAllResults } from "./utils/getMatchFromAllResults";
import { getMatchResultsFromProductAndUser } from "./utils/getMatchResultsFromProductAndUser";
import { useState } from "react";

export const useUserSettings = () => {
  const [isPreferencesSet, setIsPreferencesSet] = useState(false);
  const [isProductMatch, setIsProductMatch] = useState(true);
  const [dietPreferences, setDietPreferences] = useState(null);
  const [environmentPreferences, setEnvironmentPreferences] = useState(null);
  const [nutritionPreferences, setNutritionPreferences] = useState(null);

  const checkProductMatch = (product, user) => {
    const userOptionsArray = createSettingsArray(undefined, user)
      .map((category) => category.value)
      .flat();

    const productCategoriesArray = createSettingsArray(product, undefined);
    const {
      allResults,
      dietPreferences,
      environmentPreferences,
      nutritionPreferences,
    } = getMatchResultsFromProductAndUser(
      userOptionsArray,
      productCategoriesArray
    );

    setDietPreferences(dietPreferences);
    setEnvironmentPreferences(environmentPreferences);
    setNutritionPreferences(nutritionPreferences);

    const productMatchResult = getMatchFromAllResults(allResults);

    setIsProductMatch(productMatchResult);
    setIsPreferencesSet(true);

    return isProductMatch;
  };

  return {
    createSettingsArray,
    checkProductMatch,
    isPreferencesSet,
    nutritionPreferences,
    environmentPreferences,
    dietPreferences,
    isProductMatch,
  };
};
