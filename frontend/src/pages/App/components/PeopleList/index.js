import React from "react";

import { useSelector } from "react-redux";

import { Table } from "./styles";

function PeopleList() {
  const { data } = useSelector(({ peopleReducer }) => peopleReducer);

  return (
    <div>
      <Table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Participation</th>
        </tr>

        {data.map((item, key) => (
          <tr key={key}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.participation}%</td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default PeopleList;
