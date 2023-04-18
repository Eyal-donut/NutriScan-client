import { icons } from "../../../constants/constants";
import { convertNutValuesToClasses } from "./convertNutValuesToClasses";

export const createSettingsArray = (product, user) => {
  if (product && !user) {
    return [
      {
        category: "dietPreferences",
        name: "Diet Preferences",
        icon: icons.NO_MATCH_ICON,
        value: [
          {
            name: "Gluten free",
            value: product.settings.dietPreferences["Gluten free"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Lactose free",
            value: product.settings.dietPreferences["Lactose free"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Vegan",
            value: product.settings.dietPreferences["Vegan"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Vegetarian",
            value: product.settings.dietPreferences["Vegetarian"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
        ],
      },
      {
        category: "environmentPreferences",
        name: "Environment Preferences",
        icon: icons.MATCH_ICON,
        value: [
          {
            name: "Microplastic",
            value: product.settings.environmentPreferences["Microplastic"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Palm oil",
            value: product.settings.environmentPreferences["Palm oil"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Silicone & Siloxane",
            value:
              product.settings.environmentPreferences["Silicone & Siloxane"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
        ],
      },
      {
        category: "nutritionPreferences",
        name: "Nutrition Preferences",
        icon: icons.MATCH_ICON,
        value: [
          {
            name: "Carbohydrates",
            value: convertNutValuesToClasses(
              "Carbohydrates",
              product.settings.nutritionPreferences.Carbohydrates["units"] ===
                "g"
                ? product.settings.nutritionPreferences.Carbohydrates["val"]
                : product.settings.nutritionPreferences.Carbohydrates["val"] /
                    1000
            ),
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Cholesterol",
            value: convertNutValuesToClasses(
              "Cholesterol",
              product.settings.nutritionPreferences.Cholesterol["units"] === "g"
                ? product.settings.nutritionPreferences.Cholesterol["val"]
                : product.settings.nutritionPreferences.Cholesterol["val"] /
                    1000
            ),
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Fat",
            value: convertNutValuesToClasses(
              "Fat",
              product.settings.nutritionPreferences.Fat["units"] === "g"
                ? product.settings.nutritionPreferences.Fat["val"]
                : product.settings.nutritionPreferences.Fat["val"] / 1000
            ),
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Saturated fat",
            value: convertNutValuesToClasses(
              "Saturated fat",
              product.settings.nutritionPreferences[
                "Saturated fat"["units"]
              ] === "g"
                ? product.settings.nutritionPreferences["Saturated fat"["val"]]
                : product.settings.nutritionPreferences[
                    "Saturated fat"["val"]
                  ] / 1000
            ),
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Sodium",
            value: convertNutValuesToClasses(
              "Sodium",
              product.settings.nutritionPreferences.Sodium["units"] === "g"
                ? product.settings.nutritionPreferences.Sodium["val"]
                : product.settings.nutritionPreferences.Sodium["val"] / 1000
            ),
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Sugar",
            value: convertNutValuesToClasses(
              "Sugar",
              product.settings.nutritionPreferences.Sugar["units"] === "g"
                ? product.settings.nutritionPreferences.Sugar["units"]
                : product.settings.nutritionPreferences.Sugar["units"] / 1000
            ),
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
        ],
      },
    ];
  } else if (!product && user)
    return [
      {
        category: "dietPreferences",
        name: "Diet Preferences",
        icon: icons.NO_MATCH_ICON,
        value: [
          {
            name: "Gluten free",
            value: user.settings.dietPreferences["Gluten free"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Lactose free",
            value: user.settings.dietPreferences["Lactose free"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Vegan",
            value: user.settings.dietPreferences["Vegan"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Vegetarian",
            value: user.settings.dietPreferences["Vegetarian"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
        ],
      },
      {
        category: "environmentPreferences",
        name: "Environment Preferences",
        icon: icons.MATCH_ICON,
        value: [
          {
            name: "Microplastic",
            value: user.settings.environmentPreferences["Microplastic"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Palm oil",
            value: user.settings.environmentPreferences["Palm oil"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Silicone & Siloxane",
            value: user.settings.environmentPreferences["Silicone & Siloxane"],
            type: "checkbox",
            imageUrl: icons.MATCH_ICON,
          },
        ],
      },
      {
        category: "nutritionPreferences",
        name: "Nutrition Preferences",
        icon: icons.MATCH_ICON,
        value: [
          {
            name: "Carbohydrates",
            value: user.settings.nutritionPreferences.Carbohydrates,
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Cholesterol",
            value: user.settings.nutritionPreferences.Cholesterol,
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Fat",
            value: user.settings.nutritionPreferences.Fat,
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Saturated fat",
            value: user.settings.nutritionPreferences["Saturated fat"],
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Sodium",
            value: user.settings.nutritionPreferences.Sodium,
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
          {
            name: "Sugar",
            value: user.settings.nutritionPreferences.Sugar,
            type: "range",
            imageUrl: icons.MATCH_ICON,
          },
        ],
      },
    ];
};
