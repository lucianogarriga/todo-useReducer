import React from 'react';

const ToDoList = ({todoList}) => {
    return (
        <>
            <h4>Listado de tareas</h4>
            <ol>
            {todoList.map((todo) => {
                return  <li key={todo.date}>
                    <span style={{fontWeight:"bold"}}>{todo.name} - </span>
                    <span style={{fontSize:"10px"}}>Fecha:  {todo.date}</span>
                </li>
            })}
            </ol>
        </>
    );
}

export default ToDoList;
