import { ActionType } from "redux-promise-middleware";
import { getBrands } from "../../utils/fetchers";
import { ACTION_STRING } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getBrandsPending = () => ({
  type: ACTION_STRING.getBrands.concat("_", Pending),
});

const getBrandsRejected = (error) => ({
  type: ACTION_STRING.getBrands.concat("_", Rejected),
  payload: { error },
});

const getBrandsFulfilled = (data) => ({
  type: ACTION_STRING.getBrands.concat("_", Fulfilled),
  payload: { data },
});

const getBrandsThunk = () => {
  return async (dispacth) => {
    try {
      dispacth(getBrandsPending());
      const result = await getBrands();
      dispacth(getBrandsFulfilled(result.data));
    } catch (error) {
      dispacth(getBrandsRejected(error));
    }
  };
};

const brandsActions = {
  getBrandsThunk,
};

export default brandsActions;
