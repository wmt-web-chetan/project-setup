import { get, post, patch, del,put } from "../../helpers/apiWrapper";

// POST API for login
export const createLoginAuthentication = async (userData) => {
  const config = {
    data: userData,
    Headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  return await post(`/employee/login`, config);
};

//get APi for get user
export const getUser = async (data) => {
  const config = {
    data: {type: data?.type},
  };
  return await post(`/employee/${data?.id}`,config);
};

//forgot password link
export const forgotPassword = async (data) => {
  const config = {
    data: data,
  };
  return await post(`/employee/forgot-password`, config);
};
// POST API for logout
export const createLogoutAuthentication = async () => {
  return await post(`/auth/logout`);
};

//reset password

export const resetPassword = async (data) => {
  const config = {
    data: data,
  };
  return await put(`/employee/set-password`, config);
};

//profile update
export const profileUpdate = async ({ formData, data }) => {
  const config = {
    data: formData,
  };
  return await put(`/employee/edit/${data?.id}`, config);
};

// get the version
export const getTheVersion = async () => {
  return await get(`/force-update/latest-force-updates`);
};
