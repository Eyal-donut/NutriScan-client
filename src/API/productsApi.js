import { links, constants } from "../constants/constants";
import axios from "axios";

const getFromMongo = async (barcode) => {
  try {
    const response = await axios.get(`${links.PRODUCTS_ROUTES_URL}/${barcode}`);
    const data = await response.data;
    return data.data;
  } catch (error) {
    if (error.response.status === 404) {
      console.log(`Product not found in ${constants.APP_NAME} API.`);
    } else {
      console.error(`Error while fetching from MongoDB error: ${error}`);
    }
  }
};

const getFromOpenFoodFacts = async (barcode) => {
  try {
    const response = await axios.get(
      `${links.OPEN_FOOD_FACTS_URL}/${barcode}`
    );
    const data = response.data;
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
  if (dataFromMongo) {
    return dataFromMongo;
  }
  const dataFromOpenFoodApi = await getFromOpenFoodFacts(barcode);
  if (dataFromOpenFoodApi) {
    return dataFromOpenFoodApi;
  }
  throw new Error("Product not found");
};
