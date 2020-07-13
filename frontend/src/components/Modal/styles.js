import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;
