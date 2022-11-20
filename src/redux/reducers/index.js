import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auths";
import productReducer from "./product";
import registerReducer from "./register";
import profileReducer from './profile'

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  data_profile: profileReducer.getProfileReducer,
  products: productReducer,
});
