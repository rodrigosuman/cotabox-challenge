import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0) }
  to { opacity: 1; transform: scale(1) }
`;

export const Container = styled.div`
  align-self: center;
  display: flex;
  border-radius: 10px;
  background: #1b1b1b91;
  margin-bottom: 48px;
  width: 850px;
  padding: 64px;

  animation: ${fadeIn} 500ms;
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: #ff5593;
  font-weight: 500;
  line-height: 32px;
`;
