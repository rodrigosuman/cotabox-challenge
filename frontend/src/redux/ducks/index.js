import { combineReducers } from "redux";

import peopleReducer from "./People";

const appReducer = combineReducers({ peopleReducer });

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
