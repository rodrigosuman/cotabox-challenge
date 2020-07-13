import React from "react";

import { Container } from "./styles";

function Modal(props) {
  const { isOpen, children } = props;

  return <Container {...{ isOpen }}>{children}</Container>;
}

export default Modal;
