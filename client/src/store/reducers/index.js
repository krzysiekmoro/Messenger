import errors from "./errors";
import currentUser from "./currentUser";
import messages from "./messages";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentUser,
  errors,
  messages,
});

export default rootReducer;
