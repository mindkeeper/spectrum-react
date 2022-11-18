import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auths";
import registerReducer from "./register";

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
});
