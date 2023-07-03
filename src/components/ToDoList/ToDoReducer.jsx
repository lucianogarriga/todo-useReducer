import React, { useReducer } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

const initialState = [];

const todosReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

const ToDoReducer = () => {
  const [todoListState, dispatch] = useReducer(todosReducer, initialState);

  console.log(todoListState);

  function addTaskHandler(text) {
    dispatch({
      type: "add",
      payload: {
        name: text,
        date: new Date().toLocaleString(),
      },
    });
  }

  return (
    <>
      <Form addTask={addTaskHandler} />
      <ToDoList todoList={todoListState} />
    </>
  );
};

export default ToDoReducer;
