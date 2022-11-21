import { ActionType } from "redux-promise-middleware";
import { getData, getProduct } from "../../utils/fetchers";
import { ACTION_STRING } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getProductPending = () => ({
  type: ACTION_STRING.getProducts.concat("_", Pending),
});

const getProductRejected = (error) => ({
  type: ACTION_STRING.getProducts.concat("_", Rejected),
  payload: { error },
});

const getProductFulfilled = (data) => ({
  type: ACTION_STRING.getProducts.concat("_", Fulfilled),
  payload: { data },
});

const getDetailsPending = () => ({
  type: ACTION_STRING.getDetailProduct.concat("_", Pending),
});

const getDetailsRejected = (error) => ({
  type: ACTION_STRING.getDetailProduct.concat("_", Rejected),
  payload: { error },
});

const getDetailsFulfilled = (data) => ({
  type: ACTION_STRING.getDetailProduct.concat("_", Fulfilled),
  payload: { data },
});

const getProductThunk = (params) => {
  return async (dispacth) => {
    try {
      dispacth(getProductPending());
      const result = await getProduct(params);
      dispacth(getProductFulfilled(result.data));
    } catch (error) {
      dispacth(getProductRejected(error));
    }
  };
};

const getDetailsThunk = (url) => {
  return async (dispacth) => {
    try {
      dispacth(getDetailsPending());
      const result = await getData(url);
      dispacth(getDetailsFulfilled(result.data));
    } catch (error) {
      dispacth(getDetailsRejected(error));
    }
  };
};
const productActions = {
  getProductThunk,
  getDetailsThunk,
};

export default productActions;
