import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDashboardStastics,getAllCategory ,getCSVLink} from "../../api/dashboard";

// Thunk action for get all dashboard data
export const getDashboardStasticsAction = createAsyncThunk(
  "dashboard/getAll",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getDashboardStastics(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllCategoryAction = createAsyncThunk(
  "category/All",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getAllCategory(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCSVLinkeAction = createAsyncThunk(
  "csv/All",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getCSVLink(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

