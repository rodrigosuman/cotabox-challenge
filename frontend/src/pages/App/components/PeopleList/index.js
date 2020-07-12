import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Table } from "./styles";

import { PieChart } from "react-minimal-pie-chart";

import { Delete } from "@material-ui/icons";

import { deletePersonDocument } from "../../../../services/people.service";

import { setPeopleListAction } from "../../../../redux/ducks/People";

function PeopleList() {
  const { data } = useSelector(({ peopleReducer }) => peopleReducer);

  return (
    <div>
      <Table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Participation</th>
          <th></th>
          <th></th>
        </tr>

        {data.map((item, key) => (
          <tr key={key}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.value}%</td>
            <td>
              <Delete
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(item.id)}
              />
            </td>
            <td>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  background: item.color,
                }}
              />
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );

  function handleDelete(id) {
    deletePersonDocument(id).then(() => {
      const newPersonList = data
        .map((item) => {
          if (item._id !== id) {
            return item;
          }
        })
        .filter((item) => item !== undefined);

      dispatch(setPeopleListAction(newPersonList));
    });
  }
}

export default PeopleList;
