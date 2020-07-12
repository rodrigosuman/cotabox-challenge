import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { Container } from "./styles";

import { getAllPeopleData } from "../../services/people.service";

import { setPeopleListAction } from "../../redux/ducks/People";

import PeopleList from "./components/PeopleList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllPeopleData().then(({ data }) => {
      console.log({ data });
      return dispatch(setPeopleListAction(data));
    });
  }, []);

  return (
    <Container>
      <PeopleList />
    </Container>
  );
}

export default App;
