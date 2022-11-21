import { ActionType } from "redux-promise-middleware";
import { getData, getProduct, getProductSeller } from "../../utils/fetchers";
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
const getRelatedProductsPending = () => ({
  type: ACTION_STRING.getRelatedProducts.concat("_", Pending),
});

const getRelatedProductsRejected = (error) => ({
  type: ACTION_STRING.getRelatedProducts.concat("_", Rejected),
  payload: { error },
});

const getRelatedProductsFulfilled = (data) => ({
  type: ACTION_STRING.getRelatedProducts.concat("_", Fulfilled),
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
const getRelatedThunk = (url) => {
  return async (dispacth) => {
    try {
      dispacth(getRelatedProductsPending());
      const result = await getData(url);
      dispacth(getRelatedProductsFulfilled(result.data));
    } catch (error) {
      dispacth(getRelatedProductsRejected(error));
    }
  };
};
const productActions = {
  getProductThunk,
  getDetailsThunk,
  getProductSellerThunk,
  getRelatedThunk,
};

export default productActions;
