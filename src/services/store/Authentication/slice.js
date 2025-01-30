import { createSlice } from "@reduxjs/toolkit";
import {
  createAuthentication,
  logoutAuthentication,
  forgotPasswordLink,
  resetPasswordAction,
} from "./actions";
import { notification } from "antd";

const initialState = {
  user: {},
  selectedLocation: null,
  loading: false,
  error: null,

  logout: {},
  logoutLoading: false,
  logoutError: null,

  forgotPasswordLink: {},
  forgotPasswordLoading: false,
  forgotPasswordError: null,

  resetpassword: {},
  resetpasswordLoading: false,
  resetpasswordError: null,
};
const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    removeUser: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAuthentication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAuthentication.fulfilled, (state, action) => {
        console.log(action.payload, "action");
        state.loading = false;
        state.user = action.payload;
        if (action?.payload?.meta?.success === true) {
          if (action?.payload?.data?.is_active) {
            notification.success({
              message: "Success",
              description: action?.payload?.meta?.message,
              duration: 2,
            });
          } else {
            notification.error({
              message: "Your account is not active",
              description: "Please contact your admin !",
              duration: 2,
            });
          }
        } else {
          notification.error({
            message: "Error",
            description: action?.payload?.meta?.message,
            duration: 2,
          });
        }
      })
      .addCase(createAuthentication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutAuthentication.pending, (state) => {
        state.logoutLoading = true;
        state.logoutError = null;
      })
      .addCase(logoutAuthentication.fulfilled, (state, action) => {
        state.logoutLoading = false;
        state.logout = action.payload;
        state.user = {};
        localStorage.removeItem("IPBT_TOKEN");
        if (action?.payload?.success === true) {
          notification.success({
            message: "Success",
            description: action?.payload?.message,
            duration: 2,
          });
        } else {
          notification.error({
            message: "Error",
            description: action?.payload?.message,
            duration: 2,
          });
        }
      })
      .addCase(logoutAuthentication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(forgotPasswordLink.pending, (state) => {
        state.forgotPasswordLoading = true;
        state.forgotPasswordError = null;
      })
      .addCase(forgotPasswordLink.fulfilled, (state, action) => {
        state.forgotPasswordLoading = false;
        state.forgotPasswordLink = action.payload.data;
        if (action?.payload?.meta?.success === true) {
          notification.success({
            message: "Success",
            description: action?.payload?.meta?.message,
            duration: 2,
          });
        } else {
          notification.error({
            message: "Error",
            description: action?.payload?.meta?.message,
            duration: 2,
          });
        }
      })
      .addCase(forgotPasswordLink.rejected, (state, action) => {
        state.forgotPasswordLoading = false;
        state.forgotPasswordError = action.payload;
      })
      .addCase(resetPasswordAction.pending, (state) => {
        state.resetpasswordLoading = true;
        state.resetpasswordError = null;
      })
      .addCase(resetPasswordAction.fulfilled, (state, action) => {
        state.resetpasswordLoading = false;
        state.resetpassword = action.payload;
        if (action?.payload?.meta?.success === true) {
          notification.success({
            message: "Success",
            description: action?.payload?.meta?.message,
            duration: 2,
          });
        } else {
          notification.error({
            message: "Error",
            description: action?.payload?.meta?.message,
            duration: 2,
          });
        }
      })
      .addCase(resetPasswordAction.rejected, (state, action) => {
        state.resetpasswordLoading = false;
        state.resetpasswordError = action.payload;
      });
  },
});

export const { removeUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;
