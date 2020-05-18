import errors from "./errors";
import currentUser from "./currentUser";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentUser,
  errors,
});

export default rootReducer;
