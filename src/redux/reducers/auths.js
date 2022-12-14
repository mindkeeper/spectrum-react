import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  isError: false,
  isLoading: false,
  isFulfilled: false,
  error: null,
  userInfo: {
    id: null,
    token: null,
    role: null,
    email: null,
  },
  code: "",
};

const authReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { authLogin, authLogout, authReset } = ACTION_STRING;

  switch (type) {
    case authLogin.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case authLogin.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.response.data.msg,
      };
    case authLogin.concat("_", Fulfilled):
      return {
        ...prevState,
        isError: false,
        isFulfilled: true,
        isLoading: false,
        userInfo: {
          id: payload.data.data.user_id,
          token: payload.data.data.token,
          email: payload.data.data.email,
          roles: payload.data.data.roles_id,
        },
      };
    case authLogout.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case authLogout.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        error: payload.error.response.data.msg,
      };
    case authLogout.concat("_", Fulfilled):
      return initialState;
    case authReset.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case authReset.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.response.data.msg,
      };
    case authReset.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        code: !payload.data.data ? "" : payload.data.data.otp,
      };
    default:
      return prevState;
  }
};

export default authReducer;
