import React from "react";

import { Container, SubmitButton, Title, SignUpLink } from "./styles";

import { Email, Lock } from "@material-ui/icons";

/**
 * components
 */
import useComponents from "../../../components/hooks/useComponents";

function Signin({ history }) {
  const { push } = history;
  const { Input } = useComponents();
  return (
    <Container>
      <Title>Hi there!</Title>

      <Input label="Email" iconStart={<Email />} type="email" />
      <Input label="Password" iconStart={<Lock />} type="password" />

      <SubmitButton>Login</SubmitButton>

      <SignUpLink onClick={() => push("/auth/signup")}>Sign up!</SignUpLink>
    </Container>
  );
}

export default Signin;
