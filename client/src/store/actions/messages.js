import { apiCall } from "../../services/api";
import { LOAD_MESSAGES, REMOVE_MESSAGES } from "../actionTypes";
import { addError } from "./errors";

export const loadMessages = (messages) => {
  type: LOAD_MESSAGES, messages;
};

export const fetchMessages = () => {
  return (dispatch) => {
    return apiCall("GET", "/api/messages")
      .then((res) => dispatch(loadMessages(res)))
      .catch((error) => addError(error.message));
  };
};
