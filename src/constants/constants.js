import WARNING_ICON from "../assets/icons/warningOrange.png";
import NO_MATCH_ICON from "../assets/icons/noMatchRed.png";
import MATCH_ICON from "../assets/icons/checkGreen.png";
import BACK_ICON from "../assets/icons/arrow.png";

export const constants = {
  APP_NAME: "NutriScan",
  OPEN_FOOD_API: "Open Food API",
  PRODUCT_NOT_FOUND: "Product not found",
  EMAIL_REGEX: /^\w+([-._]\w+)*@\w+([-._]\w+)*\.\w{2,}$/i,
};

export const links = {
  AUTH_ROUTES_URL: "http://localhost:5000/api/v1/auth",
  PRODUCTS_ROUTES_URL: "http://localhost:5000/api/v1/products-scanner/products",
  OPEN_FOOD_FACTS_URL: "https://world.openfoodfacts.org/api/v2/product",
};

export const icons = {
  MATCH_ICON,
  WARNING_ICON,
  NO_MATCH_ICON,
  BACK_ICON,
};

export const newUser = {
  products: [],
  dietPreferences: {
    "Gluten free": false,
    "Lactose free": false,
    Vegan: false,
    Vegetarian: false,
  },
  environmentPreferences: {
    "Silicone & Siloxane": false,
    Microplastic: false,
    "Palm oil": false,
  },
  nutritionPreferences: {
    Fat: "Off",
    "Saturated fat": "Off",
    Cholesterol: "Off",
    Carbohydrates: "Off",
    Sugar: "Off",
    Salt: "Off",
  },
};

export const NEW_USER = 
  {
    "settings": {
        "dietPreferences": {
            "Gluten free": false,
            "Lactose free": false,
            "Vegan": false,
            "Vegetarian": false
        },
        "environmentPreferences": {
            "Silicone & Siloxane": false,
            "Microplastic": false,
            "Palm oil": false
        },
        "nutritionPreferences": {
            "Fat": 0,
            "Saturated fat": 0,
            "Cholesterol": 0,
            "Carbohydrates": 0,
            "Sugar": 0,
            "Sodium": 0
        }
    },
    "products": [],
}

//amounts in 100g. Cholesterol in mg, the rest in g
export const nutValues = {
  LOW_CHOLESTEROL: 20,
  MODERATE_CHOLESTEROL: 60,
  LOW_CARBS: 5,
  MODERATE_CARBS: 22.5,
  LOW_SUGAR: 5,
  MODERATE_SUGAR: 22.5,
  LOW_SALT: .3,
  MODERATE_SALT: 1.5,
  LOW_SAT_FAT: 1.5,
  MODERATE_SAT_FAT: 5,
  LOW_FAT: 3,
  MODERATE_FAT: 17.5,

}


