// actionExecute is going for execute the state and proceed
import { GET_API_TODO } from "./actionsList";
export const setTodo = (loaddata) => ({
  type: GET_API_TODO,
  loaddata,
});
