export const getOptionResult = (examinedUserOption, productOption) => {
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
    return optionResult
  }