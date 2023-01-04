import { ACTION_STRING } from "./actionStrings";
import { newTransactions } from "../../utils/fetchers";
const {
  addtoCart,
  updateItemQty,
  resetCart,
  deleteCartItem,
  transData,
  createTrans,
  pending,
  rejected,
  fulfilled,
} = ACTION_STRING;

const createTransPending = () => ({
  type: createTrans.concat(pending),
});

const createTransRejected = (error) => ({
  type: createTrans.concat(rejected),
  payload: { error },
});

const createTransFulfilled = (data) => ({
  type: createTrans.concat(fulfilled),
  payload: { data },
});

const createTransThunk =
  (body, token, cbSuccess, cbDenied) => async (dispatch) => {
    try {
      dispatch(createTransPending());
      const result = await newTransactions(body, token);
      dispatch(createTransFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(createTransRejected(error));

      typeof cbDenied === "function" && cbDenied();
    }
  };
const addtoCartActions = (body) => {
  return {
    type: addtoCart,
    payload: { body },
  };
};

const updateCartItem = (productId, qty) => {
  return {
    type: updateItemQty,
    payload: { productId, qty },
  };
};

const deleteItem = (productId) => {
  return { type: deleteCartItem, payload: { productId } };
};

const cartReset = () => {
  return { type: resetCart };
};

const transactionData = (data) => {
  return {
    type: transData,
    payload: { data },
  };
};
const transactionActions = {
  addtoCartActions,
  updateCartItem,
  deleteItem,
  cartReset,
  transactionData,
  createTransThunk,
};

export default transactionActions;
