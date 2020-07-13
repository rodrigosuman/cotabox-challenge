import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Table = styled.table`
  border-radius: 8px;
  background: #ffffff1c;
  width: 65%;
  padding: 32px;

  tr {
    th {
      color: #24f5a0;
      font-size: 13px;
      text-align: left;
      padding: 16px;
    }

    td {
      color: #ffffff94;
      font-size: 13px;
      text-align: left;
      padding: 16px;
    }
  }
`;

export const EmptyListView = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 40px;
    color: #ffffff45;
    text-align: center;
  }
`;

export const ContainerEdit = styled.div`
  border-radius: 10px;
  background: #05061b;
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
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

export const Cancel = styled.p`
  font-size: 16px;
  color: #fffffc85;
  text-align: center;
  margin-top: 24px;
`;
