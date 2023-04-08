export const constants = {
  APP_NAME: "Products Scanner",
  EMAIL_REGEX: /^\w+([-._]\w+)*@\w+([-._]\w+)*\.\w{2,}$/i,
  AUTH_ROUTES_URL: "https://products-scanner-server.onrender.com/api/v1/auth",
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
