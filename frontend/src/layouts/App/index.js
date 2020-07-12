import React from "react";

import { Container, Content } from "./styles";

import { Route, Switch, Redirect } from "react-router-dom";

import AppRoutes from "../../routes/app.routes";

import NavBar from "./components/NavBar";

function Auth() {
  return (
    <Container>
      <NavBar />

      <Content>
        <Switch>
          {AppRoutes.map((route, key) => (
            <Route
              exact
              path={route.layout + route.path}
              render={(props) => <route.component {...props} />}
              key={key}
            />
          ))}

          <Redirect from="" to="/home" />
        </Switch>
      </Content>
    </Container>
  );
}

export default Auth;
