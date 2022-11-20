import { ActionType } from "redux-promise-middleware";
import { getCategories } from "../../utils/fetchers";
import { ACTION_STRING } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getCategoriesPending = () => ({
  type: ACTION_STRING.getCategories.concat("_", Pending),
});

const getCategoriesRejected = (error) => ({
  type: ACTION_STRING.getCategories.concat("_", Rejected),
  payload: { error },
});

const getCategoriesFulfilled = (data) => ({
  type: ACTION_STRING.getCategories.concat("_", Fulfilled),
  payload: { data },
});

const getCategoriesThunk = () => {
  return async (dispacth) => {
    try {
      dispacth(getCategoriesPending());
      const result = await getCategories();
      dispacth(getCategoriesFulfilled(result.data));
    } catch (error) {
      dispacth(getCategoriesRejected(error));
    }
  };
};

const categoriesActions = {
  getCategoriesThunk,
};

export default categoriesActions;
