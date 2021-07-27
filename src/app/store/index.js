import { applyMiddleware, createStore } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";

export const store = createStore((state = defaultState, action) => {
  return state;
}, applyMiddleware(createLogger()));
