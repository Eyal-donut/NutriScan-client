import axios from "axios";
import { links } from "../constants/constants";

export const loginUser = async (reqBody) => {
  try {
    const response = await axios.request({
      method: "post",
      baseURL: `${links.AUTH_ROUTES_URL}/login`,
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

export const registerUser = async (reqBody) => {
  try {
    const response = await axios.request({
      method: "post",
      baseURL: `${links.AUTH_ROUTES_URL}/register`,
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
      baseURL: `${links.AUTH_ROUTES_URL}/current-user`,
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

export const updateUser = async (token, user) => {
  try {
    const response = await axios.request({
      method: "put",
      baseURL: `${links.AUTH_ROUTES_URL}/update-user`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: user,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error.response.data;
  }
};
