import { useReducer } from 'react';

const initialState = [];

const todosReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case 'remove':
      return state.filter(todo => todo.date !== action.payload.date)
    default:
      return state;
  }
};

// Custom Hook = useTodoReducer

const useTodoReducer = () => useReducer(todosReducer, initialState)

export default useTodoReducer;
