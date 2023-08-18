export const TodoReducer = (state = { todos: []}, action ) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
