import styled from "styled-components";

export const Container = styled.div``;

export const SubmitButton = styled.button`
  width: 100%;
  font-size: 18px;
  color: #fff;

  background: #6f2fbf;
  padding: 12px;
  font-weight: 600;
  border-radius: 4px;

  cursor: pointer;

  margin-top: 16px;

  &:hover {
    background: #8316e275;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  color: #ffffff85;
  margin-bottom: 36px;
  font-weight: 400;
`;

export const SignUpLink = styled.p`
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-top: 16px;

  &:hover {
    color: #ffffffc4;
    text-decoration-line: underline;
  }
`;

export const Error = styled.p`
  color: #ff5593;
  margin-bottom: 32px;
`;
