import { getOptionResult } from "./getOptionResult";

export const getMatchResultsFromProductAndUser = (
  userOptionsArray,
  productCategoriesArray
) => {
  const allResults = [];
  let dietPreferences;
  let environmentPreferences;
  let nutritionPreferences;

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

      const optionResult = getOptionResult(examinedUserOption, productOption);

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

    //setting is match for a category
    if (
      notMatchesArray.length === 0 &&
      matchesArray.length === 0 &&
      unknownArray.length === 0
    ) {
      categoryResult.isMatch = "no filters";
    } else if (notMatchesArray.length > 0) {
      categoryResult.isMatch = false;
    } else if (unknownArray.length > 0) {
      categoryResult.isMatch = "Unknown";
    } else {
      categoryResult.isMatch = true;
    }

    //setting the result for each category
    categoryName === "Diet Preferences"
      ? (dietPreferences = categoryResult)
      : categoryName === "Environment Preferences"
      ? (environmentPreferences = categoryResult)
      : (nutritionPreferences = categoryResult);

    allResults.push(categoryResult);
  });
  return {
    allResults,
    dietPreferences,
    environmentPreferences,
    nutritionPreferences,
  };
};
