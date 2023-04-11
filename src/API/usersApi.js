import axios from "axios";
import { constants } from "../constants/constants";


export const loginUser = async (reqBody) => {
  try {
    const response = await axios.request({
      method: "post",
      baseURL: `${constants.AUTH_ROUTES_URL}/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: reqBody,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCurrentUser = async (token) => {
  try {
    const response = await axios.request({
      method: "get",
      baseURL: `${constants.AUTH_ROUTES_URL}/current-user`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error.response.data;
  }
};