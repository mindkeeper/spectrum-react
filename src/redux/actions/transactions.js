import { ACTION_STRING } from "./actionStrings";

const { addtoCart, updateItemQty, resetCart, deleteCartItem } = ACTION_STRING;

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
const transactionActions = {
  addtoCartActions,
  updateCartItem,
  deleteItem,
  cartReset,
};

export default transactionActions;
