import React, { useState, useRef, useEffect } from "react";

import PropTypes from "prop-types";

import { Container, InputContainer, Input } from "./styles";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import { useField } from "@unform/core";

function CustomInput(props) {
  const {
    iconStart,
    placeholder,
    label,
    type,
    name,
    customStyles,
    hidden,
  } = props;

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
    <Container style={hidden && { display: "none" }}>
      <p>{label}</p>
      <InputContainer style={customStyles} {...{ error }}>
        {/* {iconStart && iconStart} */}
        <Input
          ref={inputRef}
          placeholder={placeholder}
          type={customType}
          autoComplete="off"
          hidden={hidden}
          step="any"
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
  customStyles: PropTypes.object,
  hidden: PropTypes.bool,
};

CustomInput.defaultProps = {
  placeholder: "",
  label: "",
  type: "text",
  name: "name",
  customStyles: {},
};
