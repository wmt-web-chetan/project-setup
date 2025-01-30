import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import './scss/global.scss'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider, theme } from "antd";
import { Provider } from "react-redux";
import store from "./services/store/Store";
import { antConfig } from "./utils/ant-config";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
 
    <Provider store={store}>
      <ConfigProvider
      theme={{
        ...antConfig,
       
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ConfigProvider>
    </Provider>
 
);

reportWebVitals();
