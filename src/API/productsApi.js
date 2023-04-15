import { links, constants } from "../constants/constants";
import axios from "axios";

const addProperty = (product, key, value) => {
  product[key] = value;
};

const getFromMongo = async (barcode) => {
  try {
    const response = await axios.get(`${links.PRODUCTS_ROUTES_URL}/${barcode}`);
    const data = await response.data.data;
    addProperty(data, "source", constants.APP_NAME)
    addProperty(data, "dateScanned", new Date())
    return data;
  } catch (error) {
    if (error.response.status === 404) {
      console.log(`Product not found in ${constants.APP_NAME} API.`);
    } else {
      console.error(`Error while fetching from MongoDB. error: ${error}`);
    }
  }
};

const getFromOpenFoodFacts = async (barcode) => {
  try {
    const response = await axios.get(`${links.OPEN_FOOD_FACTS_URL}/${barcode}`);
    const data = response.data;
    addProperty(data, "source", constants.OPEN_FOOD_API)
    addProperty(data, "isLiked", false)
    addProperty(data, "dateScanned", new Date())
    return data;
  } catch (error) {
    if (error.response.status === 404) {
      console.log("Product not found in Open Food Facts API.");
    } else {
      console.error(`Error while fetching from Open Food Facts API.`);
    }
  }
};

export const getProduct = async (barcode) => {
  const dataFromMongo = await getFromMongo(barcode);
  if (await dataFromMongo) {
    return dataFromMongo;
  } else {
    const dataFromOpenFoodApi = await getFromOpenFoodFacts(barcode);
    if (await dataFromOpenFoodApi) {
      return dataFromOpenFoodApi;
    } else {
      console.log("Product not found in both API's");
      return;
    }
  }
};
