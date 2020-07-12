import React, { useRef, useState } from "react";

import * as Yup from "yup";

import { useDispatch } from "react-redux";

import { Container, UserName, FormContent, SubmitButton } from "./styles";

import { useAuth } from "../../../../contexts/auth.context";

import { useUnform } from "../../../../modules/unform.module";

import { createPeopleDocument } from "../../../../services/people.service";

import { appendPeopleListAction } from "../../../../redux/ducks/People";

import { CircularProgress } from "@material-ui/core";

function NavBar() {
  const { user, signOut } = useAuth();

  const { Form, Input } = useUnform();

  const formRef = useRef(null);

  const [submiting, toggleSubmiting] = useState(false);

  const dispatch = useDispatch();

  return (
    <Container>
      <UserName>
        {user.name}
        <br />
        <strong onClick={() => signOut()}>Logout</strong>
      </UserName>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormContent>
          <Input
            customStyles={{ marginBottom: 0, marginRight: 16, width: 256 }}
            name="first_name"
            label="First name"
          />
          <Input
            customStyles={{ marginBottom: 0, marginRight: 16, width: 256 }}
            name="last_name"
            label="Last name"
          />
          <Input
            customStyles={{ marginBottom: 0, marginRight: 16, width: 256 }}
            name="participation"
            label="Participation"
            type="number"
          />
          <SubmitButton type="submit">
            {submiting ? (
              <CircularProgress color="inherit" size={18} />
            ) : (
              "Send"
            )}
          </SubmitButton>
        </FormContent>
      </Form>
    </Container>
  );

  async function handleSubmit(data, { reset }) {
    try {
      toggleSubmiting(true);

      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        first_name: Yup.string().required(),
        last_name: Yup.string().required(),
        participation: Yup.number().required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      createPeopleDocument({
        ...data,
        participation: Number(data.participation),
      })
        .then(({ data }) => {
          dispatch(appendPeopleListAction(data));
          reset();
        })
        .catch((err) => console.log(err.response));

      toggleSubmiting(false);
    } catch (err) {
      toggleSubmiting(false);
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

export default NavBar;
