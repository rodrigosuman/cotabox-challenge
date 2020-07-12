const INITIAL_STATE = {
  data: [],
};

export function setPeopleListAction(payload) {
  return {
    type: "SET_PEOPLE_LIST",
    payload,
  };
}

export default function PeopleReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_PEOPLE_LIST":
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
}
