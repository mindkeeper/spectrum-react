import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auths";
import productReducer from "./product";
import registerReducer from "./register";
import profileReducer from "./profile";
import categoriesReducer from "./categories";

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  data_profile: profileReducer,
  products: productReducer,
  categories: categoriesReducer,
});
