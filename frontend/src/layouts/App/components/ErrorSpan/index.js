import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Container, ErrorMessage } from "./styles";

import { setError } from "../../../../redux/ducks/People";

function ErrorSpan() {
  const { error } = useSelector(({ peopleReducer }) => peopleReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(setError(null)), 3000);
  }, []);

  return (
    <Container>
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
}

export default ErrorSpan;
