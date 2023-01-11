import productActions from "../redux/actions/product";
import profileActions from "../redux/actions/profile";
import transactionActions from "../redux/actions/transactions";

export const stateClearer = (dispatch) => {
  dispatch(productActions.resetProduct());
  dispatch(profileActions.resetProfile());
  dispatch(transactionActions.resetTransactions());
};
