import styled from "styled-components";

export const Container = styled.div`
  p {
    color: #21ffa4;
    font-size: 14px;
    margin: 0;
    margin-bottom: 8px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  margin-bottom: 22px;
  background: #ffffff1c;
  border-radius: 4px;
  padding-bottom: 8px;
  padding-top: 12px;
  padding-left: 16px;
  padding-right: 16px;

  svg {
    color: #ffffff45;
  }
  svg {
    color: #ffffff45;
  }
`;

export const Input = styled.input`
  border: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  font-size: 16px;
  outline: none;
  width: 100%;

  &:focus {
    font-weight: 600;
  }
`;
