import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
// import historyReducer from "./historySlice";

const rootReducer = combineReducers({
  main: userReducer,
  //   history: historyReducer,
});

export default rootReducer;
