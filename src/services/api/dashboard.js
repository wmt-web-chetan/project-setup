import { get, post, put, del } from "../../helpers/apiWrapper";

export const getDashboardStastics = async (data) => {
  const config = {
    params: data,
  };
  return await post(`/analytics/getAnalytics`, config);
};

export const getAllCategory = async (data) => {
  return await get(`/treatment-category/all`);
};

export const getCSVLink = async (data) => {
  const config = {
    params: data,
  };
  return await post(`/analytics/exportCSV`, config);
};
