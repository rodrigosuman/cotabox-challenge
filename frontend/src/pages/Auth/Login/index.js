import React, { useRef, useState } from "react";

import * as Yup from "yup";

import { Container, SubmitButton, Title, SignUpLink, Error } from "./styles";

/**
 * components
 */

import { useAuth } from "../../../contexts/auth.context";

import { useUnform } from "../../../modules/unform.module";

function Signin({ history }) {
  const { push } = history;
  const { Input, Form } = useUnform();
  const formRef = useRef(null);

  const [error, setError] = useState("");

  const { login } = useAuth();

  return (
    <Container>
      <Title>Hi there!</Title>

      <Error>{error}</Error>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />

        <SubmitButton type="submit">Login</SubmitButton>
      </Form>

      <SignUpLink onClick={() => push("/auth/signup")}>Sign up!</SignUpLink>
    </Container>
  );

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      login(data).catch(({ response: { data } }) => {
        setError(data.error);
        formRef.current.setErrors({
          email: "email is a required field",
          password: "password is a required field",
        });
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
}

export default Signin;
