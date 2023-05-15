import WARNING_ICON from "../assets/icons/warningOrange.png";
import NO_MATCH_ICON from "../assets/icons/noMatchRed.png";
import MATCH_ICON from "../assets/icons/checkGreen.png";
import BACK_ICON from "../assets/icons/arrow.png";
import CARBS_ICON from "../assets/icons/new/carbs.png"
import CHOLESTEROL_ICON from "../assets/icons/new/cholesete.png"
import FAT_ICON from "../assets/icons/new/fat.png"
import GLUTEN_ICON from "../assets/icons/new/gluten.png"
import LACTOSE_ICON from "../assets/icons/new/lactose.png"
import PALM_ICON from "../assets/icons/new/palm.png"
import PLASTIC_ICON from "../assets/icons/new/plastic.png"
import SALT_ICON from "../assets/icons/new/salt.png"
import SILICONE_ICON from "../assets/icons/new/sillicone.png"
import SUGAR_ICON from "../assets/icons/new/sugar.png"
import TRANS_ICON from "../assets/icons/new/trans.png"
import VEGAN_ICON from "../assets/icons/new/vegan.png"
import VEGETARIAN_ICON from "../assets/icons/new/veget.png"


export const icons = {
  MATCH_ICON,
  WARNING_ICON,
  NO_MATCH_ICON,
  BACK_ICON,
  CARBS_ICON,
  CHOLESTEROL_ICON,
  FAT_ICON,
  GLUTEN_ICON,
  LACTOSE_ICON,
  PALM_ICON,
  PLASTIC_ICON,
  SALT_ICON,
  SILICONE_ICON,
  SUGAR_ICON,
  TRANS_ICON,
  VEGAN_ICON,
  VEGETARIAN_ICON
};



export const constants = {
  APP_NAME: "NutriScan",
  OPEN_FOOD_API: "Open Food API",
  PRODUCT_NOT_FOUND: "Product not found",
  EMAIL_REGEX: /^\w+([-._]\w+)*@\w+([-._]\w+)*\.\w{2,}$/i,
};

export const links = {
  AUTH_ROUTES_URL: "https://products-scanner-server.onrender.com/api/v1/auth",
  PRODUCTS_ROUTES_URL: "https://products-scanner-server.onrender.com/api/v1/products-scanner/products",
  OPEN_FOOD_FACTS_URL: "https://world.openfoodfacts.org/api/v2/product",
};


export const NEW_USER = {
  settings: {
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
      Fat: 0,
      "Saturated fat": 0,
      Cholesterol: 0,
      Carbohydrates: 0,
      Sugar: 0,
      Sodium: 0,
    },
  },
  products: [],
};

//amounts in 100g. Cholesterol in mg, the rest in g
export const nutValues = {
  LOW_CHOLESTEROL: 20,
  MODERATE_CHOLESTEROL: 60,
  LOW_CARBS: 5,
  MODERATE_CARBS: 22.5,
  LOW_SUGAR: 5,
  MODERATE_SUGAR: 22.5,
  LOW_SALT: 0.3,
  MODERATE_SALT: 1.5,
  LOW_SAT_FAT: 1.5,
  MODERATE_SAT_FAT: 5,
  LOW_FAT: 3,
  MODERATE_FAT: 17.5,
};

export const descriptions = {
  NUTRITION_PREFS_DESCRIPTION:
    "Personalize your nutrition for a healthier life!",
  ENVIRONMENT_PREFS_DESCRIPTION:
    "Use these filters to make more sustainable decisions",
  DIET_PREFS_DESCRIPTION: "Mark the ingredients you want to avoid to suit your life style and diet"
};
