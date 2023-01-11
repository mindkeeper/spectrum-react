import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  isFulfilled: false,
  cart: [],
  transData: {
    productList: [],
    promo_id: null,
    payment_id: null,
    shipment_id: null,
    status_id: null,
    address: "",
    phone: "",
    subtotal: null,
    total: null,
    receiver_name: "",
  },
  transSuccess: {},
};

const transactionReducer = (prevState = initialState, { type, payload }) => {
  const {
    addtoCart,
    updateItemQty,
    resetCart,
    deleteCartItem,
    transData,
    pending,
    rejected,
    fulfilled,
    createTrans,
    resetTransactions,
  } = ACTION_STRING;

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

    case transData:
      return {
        ...prevState,
        transData: {
          productList: payload.data.productList,
          promo_id: payload.data.promo_id || 1,
          payment_id: payload.data.payment_id || 1,
          shipment_id: payload.data.shipment_id || 1,
          status_id: payload.data.status_id || 1,
          address: payload.data.address || "",
          phone: payload.data.phone || "",
          subtotal: payload.data.subtotal || null,
          total: payload.data.total || null,
          receiver_name: payload.data.receiver_name || "",
        },
      };

    case createTrans.concat(pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        error: "",
      };
    case createTrans.concat(rejected):
      return {
        ...prevState,
        isError: true,
        error: payload.error,
      };
    case createTrans.concat(fulfilled):
      return {
        ...prevState,
        isFulfilled: true,
        transSuccess: payload.data.data,
      };
    case resetTransactions:
      return initialState;
    default:
      return prevState;
  }
};

export default transactionReducer;
