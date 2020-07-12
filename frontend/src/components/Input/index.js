import React, { useState } from "react";

import PropTypes from "prop-types";

import { Container, InputContainer, Input } from "./styles";

import { Visibility, VisibilityOff } from "@material-ui/icons";

function CustomInput(props) {
  const { iconStart, placeholder, label, type } = props;

  const [customType, setCustomType] = useState(type);

  return (
    <Container>
      <p>{label}</p>
      <InputContainer>
        {/* {iconStart && iconStart} */}
        <Input placeholder={placeholder} type={customType} autoComplete="off" />

        {type === "password" &&
          (customType === "password" ? (
            <Visibility
              onClick={() => {
                setCustomType("text");
              }}
            />
          ) : (
            <VisibilityOff
              onClick={() => {
                setCustomType("password");
              }}
            />
          ))}
      </InputContainer>
    </Container>
  );
}

export default CustomInput;

CustomInput.propTypes = {
  iconStart: PropTypes.element,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

CustomInput.defaultProps = {
  placeholder: "",
  label: "",
  type: "text",
};
