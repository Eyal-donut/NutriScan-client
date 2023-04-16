import { createSettingsArray } from "./utils/createUserSettings";

export const useUserSettings = () => {
  const checkProductMatch = (product, user) => {
    //user
    const userCategoriesArray = createSettingsArray(undefined, user).map(
      (category) => category.value
    );
    const userOptionsArray = userCategoriesArray.flat();

    const productCategoriesArray = createSettingsArray(product, undefined).map(
      (category) => category.value
    );
    const allResults = [];

    productCategoriesArray.forEach((productCategory) => {
      const matchesArray = [];
      const notMatchesArray = [];
      const unknownArray = [];

      for (const productOption of productCategory) {
        const userOption = userOptionsArray.find(
          (userOption) => userOption.name === productOption.name
        );
        const optionResult = {
          optionName: productOption.name,
          isMatch:
            userOption.value === false
              ? true
              : userOption.value === 0
              ? true
              : productOption.value === "Unknown" || product.value === -1
              ? "Unknown"
              : userOption.value === true && productOption.value === false
              ? true
              : userOption.value !== true &&
                userOption.value !== false &&
                userOption.value <= productOption.value,
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
        categoryName: productCategory.name,
        matchingOptions: matchesArray,
        notMatchingOptions: notMatchesArray,
        unknownArray: unknownArray,
      };
      allResults.push(categoryResult);
    });
    console.log(allResults)
  };

  return { createSettingsArray, checkProductMatch };
};
