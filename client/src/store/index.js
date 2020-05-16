import currentUser from "./reducers/currentUser";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export function configureStore() {
  const store = createStore(
    currentUser,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
  return store;
}
