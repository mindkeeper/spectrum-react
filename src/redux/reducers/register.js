import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  isLoading: false,
  isFulfilled: false,
};

const registerReducer = (prevState = initialState, { type }) => {
  const { Pending, Fulfilled } = ActionType;
  const { register } = ACTION_STRING;

  switch (type) {
    case register.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isFulfilled: false,
      };
    case register.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default registerReducer;
