import styled, { css, keyframes } from "styled-components";

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const inputError = css`
  border: 1px solid #ff0047;
  animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

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

  ${({ error }) => error && inputError}
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
    font-weight: 500;
  }
`;
