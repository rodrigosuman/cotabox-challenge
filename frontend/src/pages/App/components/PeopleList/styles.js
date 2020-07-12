import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Table = styled.table`
  border-radius: 8px;
  background: #ffffff1c;
  width: 50%;
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
