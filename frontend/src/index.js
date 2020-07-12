import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import Layouts from "./layouts";

import AuthProvider from "./contexts/auth.context";

import reduxStore from "./redux";

import "./assets/css/main.css";

ReactDOM.render(
  <Provider store={reduxStore}>
    <AuthProvider>
      <Layouts />
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
