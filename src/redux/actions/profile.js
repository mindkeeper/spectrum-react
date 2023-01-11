import { ActionType } from "redux-promise-middleware";
import { getProfile, patchProfile } from "../../utils/fetchers";
import { ACTION_STRING } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const dataProfilePending = () => ({
  type: ACTION_STRING.dataProfile.concat("_", Pending),
});
const dataProfileRejected = (error) => ({
  type: ACTION_STRING.dataProfile.concat("_", Rejected),
  payload: { error },
});
const dataProfileFulfilled = (data) => ({
  type: ACTION_STRING.dataProfile.concat("_", Fulfilled),
  payload: { data },
});

const patchProfilePending = () => ({
  type: ACTION_STRING.editProfile.concat("_", Pending),
});
const patchProfileRejected = (error) => ({
  type: ACTION_STRING.editProfile.concat("_", Rejected),
  payload: { error },
});
const patchProfileFulfilled = (data) => ({
  type: ACTION_STRING.editProfile.concat("_", Fulfilled),
  payload: { data },
});

const getProfileThunk = (token) => {
  return async (dispacth) => {
    try {
      dispacth(dataProfilePending());
      const result = await getProfile(token);
      dispacth(dataProfileFulfilled(result.data));
      console.log(result.data);
    } catch (error) {
      dispacth(dataProfileRejected(error));
    }
  };
};

const editProfileThunk = (body, token) => {
  return async (dispacth) => {
    try {
      dispacth(patchProfilePending());
      const result = await patchProfile(body, token);
      dispacth(patchProfileFulfilled(result.data));
      console.log(result.data);
    } catch (error) {
      dispacth(patchProfileRejected(error));
    }
  };
};

const resetProfile = () => {
  return { type: ACTION_STRING.resetProfile };
};

const profileActions = { getProfileThunk, editProfileThunk, resetProfile};

export default profileActions;
