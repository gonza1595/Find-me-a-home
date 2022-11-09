import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
<<<<<<< HEAD
import store from "./redux/store"
=======
import store from "./redux/store/index"
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838

ReactDOM.render(

  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>,
  document.getElementById("root")
);
