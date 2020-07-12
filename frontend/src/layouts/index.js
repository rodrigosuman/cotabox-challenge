import React from "react";

// import { Container } from './styles';
import { BrowserRouter, Switch } from "react-router-dom";

import AuthLayout from "./Auth";
import AppLayout from "./App";

import { useAuth } from "../contexts/auth.context";

function Layouts() {
  const { signed, sameUserToken } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {!signed || !sameUserToken ? <AuthLayout /> : <AppLayout />}
      </Switch>
    </BrowserRouter>
  );
}

export default Layouts;
