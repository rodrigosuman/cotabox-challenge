import React, { useState, useRef, useEffect } from "react";

import PropTypes from "prop-types";

import { Container, InputContainer, Input } from "./styles";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import { useField } from "@unform/core";

function CustomInput(props) {
  const { iconStart, placeholder, label, type, name } = props;

  const [customType, setCustomType] = useState(type);

  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <p>{label}</p>
      <InputContainer {...{ error }}>
        {/* {iconStart && iconStart} */}
        <Input
          ref={inputRef}
          placeholder={placeholder}
          type={customType}
          autoComplete="off"
        />

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
  name: PropTypes.string,
};

CustomInput.defaultProps = {
  placeholder: "",
  label: "",
  type: "text",
  name: "name",
};
