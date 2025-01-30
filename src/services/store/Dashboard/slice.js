import { createSlice } from "@reduxjs/toolkit";
import { getDashboardStasticsAction,getAllCategoryAction,getCSVLinkeAction } from "./actions";
import { notification } from "antd";

const initialState = {
  dashboardData: {},
  loadingDashboardData: false,
  errorDashboardData: null,

  allCategory:[],
  loadingAllCategory: false,
  errorAllCategory: null,

  csvExport: {},
  loadingCsvExport: false,
  errorCsvExport: null,
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getDashboardStasticsAction.pending, (state) => {
        state.loadingDashboardData = true;
        state.errorDashboardData = null;
      })
      .addCase(getDashboardStasticsAction.fulfilled, (state, action) => {
        state.loadingDashboardData = false;
        state.dashboardData = action.payload;
      })
      .addCase(getDashboardStasticsAction.rejected, (state, action) => {
        state.loadingDashboardData = false;
        state.errorDashboardData = action.payload;
      })
      .addCase(getAllCategoryAction.pending, (state) => {
        state.loadingAllCategory = true;
        state.errorAllCategory = null;
      })
      .addCase(getAllCategoryAction.fulfilled, (state, action) => {
        state.loadingAllCategory = false;
        state.allCategory = action.payload;
      })
      .addCase(getAllCategoryAction.rejected, (state, action) => {
        state.loadingAllCategory = false;
        state.errorAllCategory = action.payload;
      })
      .addCase(getCSVLinkeAction.pending, (state, action) => {
        state.loadingCsvExport = true;
        state.errorCsvExport = null;
      })
      .addCase(getCSVLinkeAction.fulfilled, (state, action) => {
        state.loadingCsvExport = false;
        state.csvExport = action.payload;
      })
      .addCase(getCSVLinkeAction.rejected, (state, action) => {
        state.loadingCsvExport = false;
        state.errorCsvExport = action.payload;
      })

  },
});
export default dashboardSlice.reducer;
