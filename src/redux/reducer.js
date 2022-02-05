import { GET_API_TODO } from "./actionsList";
// this reducer to get the state
export const getApiTodo = (state = null, action) => {
  switch (action.type) {
    case GET_API_TODO:
      return action.loaddata;
    default:
      return state;
  }
};
