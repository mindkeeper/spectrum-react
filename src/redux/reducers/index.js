import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auths";
import productReducer from "./product";
import registerReducer from "./register";

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  products: productReducer,
});
