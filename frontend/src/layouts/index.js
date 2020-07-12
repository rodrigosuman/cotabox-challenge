import React from "react";

// import { Container } from './styles';
import { BrowserRouter, Switch } from "react-router-dom";

import AuthLayout from "./Auth";

function layouts() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthLayout />
      </Switch>
    </BrowserRouter>
  );
}

export default layouts;
