import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
  loader: appReducer
});
