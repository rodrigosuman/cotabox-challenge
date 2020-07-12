import styled from "styled-components";

export const Container = styled.nav`
  background: #ffffff21;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 48px;
`;

export const UserName = styled.p`
  color: #21ffa4;
  font-weight: 600;
  text-align: right;
  line-height: 24px;
  align-self: flex-end;
  margin-bottom: 32px;

  strong {
    color: #ffffff59;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: #ffffff2e;
    }
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 123px;
  height: 49px;
  font-size: 18px;
  color: #fff;
  background: #6f2fbf;
  padding: 12px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;

  margin-top: 21px;

  &:hover {
    background: #8316e275;
  }
`;
