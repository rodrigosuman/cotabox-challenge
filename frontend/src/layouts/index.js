import React from "react";

// import { Container } from './styles';
import { BrowserRouter, Switch } from "react-router-dom";

import AuthLayout from "./Auth";

import { useAuth } from "../contexts/auth.context";

function Layouts() {
  const { signed, sameUserToken } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {!signed || !sameUserToken ? <AuthLayout /> : <h1>Wellcome</h1>}
      </Switch>
    </BrowserRouter>
  );
}

export default Layouts;
