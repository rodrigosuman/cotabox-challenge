import React, { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Table,
  Container,
  EmptyListView,
  ContainerEdit,
  SubmitButton,
  Cancel,
} from "./styles";

import { PieChart } from "react-minimal-pie-chart";

import { Delete, Block, Edit } from "@material-ui/icons";

import {
  deletePersonDocument,
  editPersonDocument,
} from "../../../../services/people.service";

import { setPeopleListAction, setError } from "../../../../redux/ducks/People";

import { useUnform } from "../../../../modules/unform.module";
import useComponents from "../../../../components/hooks/useComponents";

function PeopleList() {
  const { data } = useSelector(({ peopleReducer }) => peopleReducer);

  const dispatch = useDispatch();

  const { Form, Input } = useUnform();
  const { Modal } = useComponents();

  const formRef = useRef(null);

  const [chartData, setChartData] = useState([]);
  const [modalState, setModalState] = useState({ value: false });

  const handleClose = () => setModalState({ value: false, data: {} });
  const handleShow = (data) => {
    formRef.current.setData({
      first_name: data.first_name,
      last_name: data.last_name,
      participation: data.value,
      id: data.id,
    });
    setModalState({ value: true, data });
  };

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
    <React.Fragment>
      <Container>
        <Table>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Participation</th>
            <th></th>
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
                <Edit
                  style={{ cursor: "pointer", fontSize: 19 }}
                  onClick={() => handleShow(item)}
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
            width: 250,
            height: 250,
            marginLeft: 80,
          }}
          lineWidth={50}
          paddingAngle={2}
          data={chartData}
        />
      </Container>

      <Modal isOpen={modalState.value}>
        <ContainerEdit>
          <Form ref={formRef} onSubmit={handleEdit}>
            <Input hidden name="id" label="Id" />
            <Input name="first_name" label="First name" />
            <Input name="last_name" label="Last name" />
            <Input name="participation" label="Participation" type="number" />

            <SubmitButton type="submit">Save</SubmitButton>
            <Cancel onClick={handleClose}>Cancel</Cancel>
          </Form>
        </ContainerEdit>
      </Modal>
    </React.Fragment>
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

  function handleEdit(params) {
    console.log(params);
    const { id, participation, first_name, last_name } = params;

    editPersonDocument(id, {
      first_name,
      last_name,
      participation: Number(participation),
    })
      .then((res) => {
        const newPersonList = data
          .map((item) => {
            if (item._id !== id) {
              return item;
            }
          })
          .filter((item) => item !== undefined);

        dispatch(setPeopleListAction([...newPersonList, res.data]));
        handleClose();
      })
      .catch(({ response: { data } }) => {
        dispatch(setError(data.message));
        handleClose();
      });
    handleClose();
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
  "#ffadadff",
  "#ffd6a5ff",
  "#fdffb6ff",
  "#caffbfff",
  "#9bf6ffff",
  "#a0c4ffff",
  "#bdb2ffff",
  "#ffc6ffff",
  "#fffffcff",
  "#9c89b8ff",
  "#f0a6caff",
  "#efc3e6ff",
  "#f0e6efff",
  "#b8beddff",
];
