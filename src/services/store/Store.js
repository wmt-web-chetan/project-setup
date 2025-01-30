import { configureStore } from "@reduxjs/toolkit";

import sidebarCollapseReducer from "../../reducers/SidebarCollapse";
import darkModeReducer from "../../reducers/DarkMode";
import RtlModeReducer from "../../reducers/RtlMode";
import authenticationReducer from "../store/Authentication/slice";
import dashboardReducer from "../store/Dashboard/slice"


export default configureStore({
  reducer: {
    sidebarCollapse: sidebarCollapseReducer,
    darkMode: darkModeReducer,
    rtlMode: RtlModeReducer,
    authentication: authenticationReducer,
    dashboard: dashboardReducer
  },
});
