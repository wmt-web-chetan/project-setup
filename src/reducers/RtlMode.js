import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rtl: false,
};
export const rtlModeSlice = createSlice({
  name: "rtlMode",
  initialState,
  reducers: {
    toggleRtlMode: (state, action) => {
      state.rtl = action.payload
    },
  },
});
export const { toggleRtlMode } = rtlModeSlice.actions;

export default rtlModeSlice.reducer;
