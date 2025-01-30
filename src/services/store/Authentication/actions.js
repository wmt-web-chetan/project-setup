import { createAsyncThunk } from "@reduxjs/toolkit";
import { createLoginAuthentication, createLogoutAuthentication,forgotPassword,resetPassword } from "../../api/user";

// Thunk action for getting a list of  device tags

export const createAuthentication = createAsyncThunk(
  "authentication/create",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await createLoginAuthentication(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Thunk action for logout
export const logoutAuthentication = createAsyncThunk(
  "authentication/logout",
  async (_,{ rejectWithValue }) => {
    try {
      const response = await createLogoutAuthentication();
      return response;
    }
    catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
);

//forgot password link

export const forgotPasswordLink = createAsyncThunk(
  "authentication/forgot-password",
  async (data,{ rejectWithValue }) => {
    try {
      const response = await forgotPassword(data);
      return response;
    }
    catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
);
//reset password

export const resetPasswordAction= createAsyncThunk(
  "authentication/reset-password",
  async (data,{ rejectWithValue }) => {
    try {
      const response = await resetPassword(data);
      return response;
    }
    catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
);