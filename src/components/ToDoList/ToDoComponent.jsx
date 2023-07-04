import React from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";
import useTodoReducer from "./ToDoReducer";
 
const ToDoComponent = () => {
  // Custom Hook - useTodoReducer - from './ToDoReducer.jsx'
  const [todoListState, dispatch] = useTodoReducer();

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

export default ToDoComponent;
