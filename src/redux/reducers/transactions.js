import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  cart: [],
};

const transactionReducer = (prevState = initialState, { type, payload }) => {
  const { addtoCart, updateItemQty, resetCart, deleteCartItem } = ACTION_STRING;

  switch (type) {
    case addtoCart:
      return {
        ...prevState,
        cart:
          prevState.cart.length > 0
            ? [payload.body, ...prevState.cart]
            : [payload.body],
      };

    case updateItemQty:
      return {
        ...prevState,
        cart: prevState.cart.map((item) => {
          if (item.productId === payload.productId) {
            return {
              ...item,
              qty: payload.qty,
              subtotal: parseInt(payload.qty) * item.price,
            };
          }
          return item;
        }),
      };

    case deleteCartItem:
      return {
        ...prevState,
        cart: prevState.cart.filter(
          (item) => item.productId !== payload.productId
        ),
      };

    case resetCart:
      return {
        ...prevState,
        cart: [],
      };
    default:
      return prevState;
  }
};

export default transactionReducer;
