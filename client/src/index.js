import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { BrowserRouter } from "react-router-dom";
// import AppAdmin from "./AppAdmin";

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
