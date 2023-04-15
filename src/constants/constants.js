import WARNING_ICON from "../assets/icons/warningOrange.png";
import NO_MATCH_ICON from "../assets/icons/noMatchRed.png";
import MATCH_ICON from "../assets/icons/checkGreen.png";
import BACK_ICON from "../assets/icons/arrow.png";

export const constants = {
  APP_NAME: "Products Scanner",
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
    "silicone & Siloxane": false,
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

