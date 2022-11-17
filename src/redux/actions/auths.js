import { ActionType } from "redux-promise-middleware";
import { login } from "../../utils/fetchers";
import { ACTION_STRING } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const loginPending = () => ({
  type: ACTION_STRING.authLogin.concat("_", Pending),
});
const loginRejected = (error) => ({
  type: ACTION_STRING.authLogin.concat("_", Rejected),
  payload: { error },
});
const loginFulfilled = (data) => ({
  type: ACTION_STRING.authLogin.concat("_", Fulfilled),
  payload: { data },
});

const loginThunk = (body) => {
  return async (dispacth) => {
    try {
      dispacth(loginPending());
      const result = await login(body);
      dispacth(loginFulfilled(result.data));
    } catch (error) {
      dispacth(loginRejected(error));
    }
  };
};

const authActions = {
  loginThunk,
};

export default authActions;
