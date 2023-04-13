import WARNING_ICON from "../assets/icons/warningGrey.png";
import NO_MATCH_ICON from "../assets/icons/noMatch.png";
import MATCH_ICON from "../assets/icons/check.png";
import IMAGE_PLACEHOLDER from "../assets/images/imagePlaceholder.jpg";

export const constants = {
  APP_NAME: "Products Scanner",
  OPEN_FOOD_API: "Open Food API",
  PRODUCT_NOT_FOUND: "Product not found",
  EMAIL_REGEX: /^\w+([-._]\w+)*@\w+([-._]\w+)*\.\w{2,}$/i,
};

export const links = {
  AUTH_ROUTES_URL: "https://products-scanner-server.onrender.com/api/v1/auth",
  PRODUCTS_ROUTES_URL:
    "https://products-scanner-server.onrender.com/api/v1/products-scanner/products",
  OPEN_FOOD_FACTS_URL: "https://world.openfoodfacts.org/api/v2/product",
};

export const icons = {
  MATCH_ICON,
  WARNING_ICON,
  NO_MATCH_ICON,
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

export const productNotFoundObj = {
  source: constants.APP_NAME,
  imageUrl: IMAGE_PLACEHOLDER,
  name: constants.PRODUCT_NOT_FOUND,
};
