import React from 'react';

const ToDoList = ({todoList}) => {
    return (
        <>
            <h4>Listado de tareas</h4>
            <ol>
            {todoList.map((todo) => {
                return  <li key={todo.date}>
                    {`${todo.name} = ${todo.date}`}
                </li>
            })}
            </ol>
        </>
    );
}

export default ToDoList;
