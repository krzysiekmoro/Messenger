import { apiCall } from "../../services/api";
import { LOAD_MESSAGES } from "../actionTypes";
import { addError } from "./errors";

export const loadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  messages,
});

export const fetchMessages = () => {
  return (dispatch) => {
    return apiCall("get", "/api/messages")
      .then((res) => dispatch(loadMessages(res)))
      .catch((error) => dispatch(addError(error)));
  };
};

export const postNewMessage = (text) => {
  return (dispatch, getState) => {
    let { currentUser } = getState();
    const id = currentUser.user.id;
    return apiCall("post", `/api/users/${id}/messages`, { text })
      .then((res) => {})
      .catch((error) => dispatch(addError(error)));
  };
};
