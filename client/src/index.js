import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { BrowserRouter } from "react-router-dom";
import {UserContextProvider} from "./context/UserContext"

ReactDOM.render(
  <BrowserRouter>

    <Provider store={store}>
    <UserContextProvider> 
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </UserContextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
