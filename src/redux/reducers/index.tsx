import { combineReducers } from "redux";
import sharedReducer from "./sharedReducer";

const appReducer = combineReducers({
  shared: sharedReducer,
});

export default appReducer;
export type State = ReturnType<typeof appReducer>;
