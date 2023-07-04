import React from "react";

const ToDoList = ({ todoList }) => {
  return (
    <>
      <h3 className="mt-4" style={{textAlign:'center'}}>Listado de tareas</h3>
      <table className="table"  style={{minWidth:"420px"}}>
        <thead>
          <tr >
            <th scope="col" className="col-7">Tarea</th>
            <th scope="col" className="col-5">Fecha y hora</th> 
          </tr>
        </thead>
        <tbody>
          
            {todoList.map((todo) => {
              return (
                <>
                <tr key={todo.date} className="table-success">
                  <td style={{ fontWeight: "bold"}}>{todo.name}</td>
                  <td> {todo.date} </td>
                  </tr>
                </>
              );
            })} 
        </tbody>
      </table>
    </>
  );
};

export default ToDoList;
