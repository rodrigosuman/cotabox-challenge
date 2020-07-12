const INITIAL_STATE = {
  data: [],
  error: null,
};

export function setPeopleListAction(payload) {
  return {
    type: "SET_PEOPLE_LIST",
    payload,
  };
}

export function appendPeopleListAction(payload) {
  return {
    type: "APPEND_PEOPLE_LIST",
    payload,
  };
}

export function setError(payload) {
  return {
    type: "SET_ERROR",
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

    case "APPEND_PEOPLE_LIST":
      return {
        ...state,
        data: [...state.data, payload],
      };

    case "SET_ERROR":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
