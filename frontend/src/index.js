import React from "react";
import ReactDOM from "react-dom";

import Layouts from "./layouts";

import AuthProvider from "./contexts/auth.context";

import "./assets/css/main.css";

ReactDOM.render(
  <AuthProvider>
    <Layouts />
  </AuthProvider>,
  document.getElementById("root")
);
