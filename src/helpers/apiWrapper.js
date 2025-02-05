import axios from "axios";
import { getItem, removeItem } from "../utils/localStorage";

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: config.API_URL,
  // withCredentials: true,
});
axiosApi.defaults.headers.common["Authorization"] = getItem("BASELINE_TOKEN") || "";
axiosApi.defaults.headers.common["isAdmin"] = true;

axiosApi.interceptors.response.use(
  (response) => {
    const isUnAuthorized =
      response?.data?.meta?.message === "Unauthorized" &&
      response?.data?.meta?.status === 401;
    if (isUnAuthorized) {
      removeItem(["BASELINE_TOKEN","data","id","dataForProfile"]);
      // localStorage.removeItem("BASELINE_TOKEN");
      // localStorage.removeItem("data");
      // localStorage.removeItem("id");
      // localStorage.removeItem("dataForProfile");
      
      window.location.href = "/login";
    }
    return response.data;
  },
  (error) => {
    console.log("e", error);

    return Promise.reject(error);
  }
);
const makeRequest = (method, url, config = {}) => {
  let requestConfig = {
    ...config,
    method,
    url: `api${url}`,
  };
  return axiosApi(requestConfig);
};

export const get = (url, config = {}) => makeRequest("get", url, config);
export const post = (url, config = {}) => makeRequest("post", url, config);
export const patch = (url, config = {}) => makeRequest("patch", url, config);
export const del = (url, config = {}) => makeRequest("delete", url, config);
export const put = (url, config = {}) => makeRequest("put", url, config);
