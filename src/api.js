import axios from "axios";
import {constants} from "./constants/constants";

// const authrorisation = `Bearer ${token}`

export const loginUser = async (body) => {
  try {
    const response = await axios.request({
      method: "post",
      baseURL: `${constants.AUTH_ROUTES_URL}/login`,
      headers: {
        //     Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: body,
    });
    const data = await response.data;
    return data
  } catch (error) {
    return error.response.data
  }
};
