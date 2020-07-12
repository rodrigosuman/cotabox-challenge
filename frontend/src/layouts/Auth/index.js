import React from "react";

import { Container, Content } from "./styles";

import { Route, Switch, Redirect } from "react-router-dom";

import AuthRoutes from "../../routes/auth.routes";

function Auth() {
  return (
    <Container>
      <Content>
        <Switch>
          {AuthRoutes.map((route, key) => (
            <Route
              exact
              path={route.layout + route.path}
              render={(props) => <route.component {...props} />}
              key={key}
            />
          ))}

          <Redirect from="" to="/auth/login" />
        </Switch>
      </Content>
    </Container>
  );
}

export default Auth;
