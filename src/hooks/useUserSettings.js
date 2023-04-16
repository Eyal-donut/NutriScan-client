import { icons } from "../constants/constants";

export const useUserSettings = () => {

    const createSettingsArray = (user) => {
        return [
          {
            category: "dietPreferences",
            name: "Diet Preferences",
            icon: icons.NO_MATCH_ICON,
            value: [
              {
                name: "Gluten Free",
                value: user.settings.dietPreferences["Gluten free"],
                type: "checkbox",
                imageUrl: icons.MATCH_ICON,
              },
              {
                name: "Lactose Free",
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
                value:
                  user.settings.environmentPreferences["Silicone & Siloxane"],
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
                value: user.settings.nutritionPreferences["Carbohydrates"],
                type: "range",
                imageUrl: icons.MATCH_ICON,
              },
              {
                name: "Cholesterol",
                value: user.settings.nutritionPreferences["Cholesterol"],
                type: "range",
                imageUrl: icons.MATCH_ICON,
              },
              {
                name: "Fat",
                value: user.settings.nutritionPreferences["Fat"],
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
                name: "Salt",
                value: user.settings.nutritionPreferences["Salt"],
                type: "range",
                imageUrl: icons.MATCH_ICON,
              },
              {
                name: "Sugar",
                value: user.settings.nutritionPreferences["Sugar"],
                type: "range",
                imageUrl: icons.MATCH_ICON,
              },
            ],
          },
        ];
      };

      return {createSettingsArray}
      
}