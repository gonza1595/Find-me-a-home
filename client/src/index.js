import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { BrowserRouter } from "react-router-dom";
// import AppAdmin from './AppAdmin';
import axios from "axios";

axios.defaults.baseURL ="https://back-proyecto-final-production.up.railway.app";
// axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
        {/* <AppAdmin /> */}
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
