import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Table, Container, EmptyListView } from "./styles";

import { PieChart } from "react-minimal-pie-chart";

import { Delete, Block } from "@material-ui/icons";

import { deletePersonDocument } from "../../../../services/people.service";

import { setPeopleListAction } from "../../../../redux/ducks/People";

function PeopleList() {
  const { data } = useSelector(({ peopleReducer }) => peopleReducer);

  const dispatch = useDispatch();

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const color = () => {
      let index = Math.floor(Math.random() * chartColors.length);
      return chartColors[index];
    };

    const aux = data.map((item) => ({
      title: `${item.first_name} ${item.last_name}`,
      first_name: item.first_name,
      last_name: item.last_name,
      value: item.participation,
      id: item._id,
      color: color(),
    }));

    setChartData(aux);
  }, [data]);

  if (!data.length) {
    return (
      <EmptyListView>
        <Block
          style={{
            fontSize: 80,
            color: "#ffffff45",
            marginBottom: 40,
          }}
        />

        <p>Empty people's list.</p>
      </EmptyListView>
    );
  }

  return (
    <Container>
      <Table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Participation</th>
          <th></th>
          <th></th>
        </tr>

        {chartData.map((item, key) => (
          <tr key={key}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.value}%</td>
            <td>
              <Delete
                style={{ cursor: "pointer", fontSize: 19 }}
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
      <PieChart
        style={{
          width: 350,
          height: 350,
          marginLeft: 80,
        }}
        lineWidth={50}
        paddingAngle={2}
        data={chartData}
      />
    </Container>
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

const chartColors = [
  "#6272a4",
  "#8be9fd",
  "#50fa7b",
  "#ffb86c",
  "#ff79c6",
  "#bd93f9",
  "#ff5555",
  "#f1fa8c",
];
