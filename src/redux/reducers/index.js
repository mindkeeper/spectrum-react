import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auths";
import productReducer from "./product";
import registerReducer from "./register";
import profileReducer from "./profile";
import categoriesReducer from "./categories";
import brandsReducer from "./brands";
import transactionReducer from "./transactions";

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  data_profile: profileReducer.getProfileReducer,
  products: productReducer,
  categories: categoriesReducer,
  brands: brandsReducer,
  transactions: transactionReducer,
});
