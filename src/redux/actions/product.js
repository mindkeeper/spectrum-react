import { ActionType } from "redux-promise-middleware";
import {
  getData,
  getProduct,
  getProductSeller,
  delProductSeller,
} from "../../utils/fetchers";
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

const getProductSellerPending = () => ({
  type: ACTION_STRING.getProductSeller.concat("_", Pending),
});

const getProductSellerRejected = (error) => ({
  type: ACTION_STRING.getProductSeller.concat("_", Rejected),
  payload: { error },
});

const getProductSellerFulfilled = (data) => ({
  type: ACTION_STRING.getProductSeller.concat("_", Fulfilled),
  payload: { data },
});

const delProductPending = () => ({
  type: ACTION_STRING.delProduct.concat("_", Pending),
});

const delProductRejected = (error) => ({
  type: ACTION_STRING.delProduct.concat("_", Rejected),
  payload: { error },
});

const delProductFulfilled = (data) => ({
  type: ACTION_STRING.delProduct.concat("_", Fulfilled),
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

const getProductSellerThunk = (token, params) => {
  return async (dispacth) => {
    try {
      dispacth(getProductSellerPending());
      const result = await getProductSeller(token, params);
      dispacth(getProductSellerFulfilled(result.data));
    } catch (error) {
      dispacth(getProductSellerRejected(error));
    }
  };
};

const delProductThunk = (url) => {
  return async (dispacth) => {
    try {
      dispacth(delProductPending());
      const result = await delProductSeller(url);
      dispacth(delProductFulfilled(result.data));
    } catch (error) {
      dispacth(delProductRejected(error));
    }
  };
};
const productActions = {
  getProductThunk,
  getDetailsThunk,
  getProductSellerThunk,
  delProductThunk,
};

export default productActions;
