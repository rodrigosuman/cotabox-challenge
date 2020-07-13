import React, { useRef } from "react";

import * as Yup from "yup";

import { Container, SubmitButton, Title, SignUpLink, Error } from "./styles";

/**
 * components
 */

import { useAuth } from "../../../contexts/auth.context";

import { useUnform } from "../../../modules/unform.module";
import { useState } from "react";

function Signin({ history }) {
  const { push } = history;
  const { Input, Form } = useUnform();

  const [error, setError] = useState("");

  const formRef = useRef(null);

  const { singUp } = useAuth();

  return (
    <Container>
      <Title>Hi there!</Title>

      <Error>{error}</Error>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input label="Name" type="text" name="name" />
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <Input
          label="Confirm your password"
          type="password"
          name="password_confirmation"
        />

        <SubmitButton type="submit">Sign Up!</SubmitButton>
      </Form>

      <SignUpLink onClick={() => push("/auth/login")}>Login</SignUpLink>
    </Container>
  );

  async function handleSubmit(data, { reset }) {
    console.log(data);
    try {
      // Remove all previous errors

      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
        password_confirmation: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      singUp(data).catch(({ response: { data } }) => {
        setError(data.error);
        formRef.current.setErrors({
          email: "email is a required field",
          name: "name is a required field",
          password: "password is a required field",
          password_confirmation: "Passwords must match",
        });

        reset();
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        console.log({ validationErrors });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
}

export default Signin;
