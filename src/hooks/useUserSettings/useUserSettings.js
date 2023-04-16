import { createSettingsArray } from "./utils/createUserSettings";

export const useUserSettings = () => {
  const checkProductMatch = (product, user) => {
    //user
    const userCategoriesArray = createSettingsArray(undefined, user).map(
      (category) => category.value
    );
    const userOptionsArray = userCategoriesArray.flat();

    const productCategoriesArray = createSettingsArray(product, undefined)
    
    // const productCategoriesArray = createSettingsArray(product, undefined).map(
    //   (category) => category.value
    // );
    const allResults = [];

    productCategoriesArray.forEach((productCategory) => {
      const categoryName = productCategory.name
      
      const productOptionsArray = productCategory.value
      
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
      allResults.push(categoryResult);
    });
    console.log(allResults);
  };

  return { createSettingsArray, checkProductMatch };
};
