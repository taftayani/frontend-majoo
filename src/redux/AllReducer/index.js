import { combineReducers } from "redux";
import { getApiTodo } from "../reducer";

export const AllReducer = combineReducers({
  ListApiTodo: getApiTodo,
});
