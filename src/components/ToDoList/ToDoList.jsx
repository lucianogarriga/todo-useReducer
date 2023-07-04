import React from "react";

const ToDoList = ({ todoList, onRemove }) => {
 

  return (
    <>
      <h3 className="mt-4" style={{textAlign:'center'}}>Listado de tareas</h3>
      <table className="table"  style={{maxWidth:"370px"}}>
        <thead>
          <tr >
            <th scope="col" className="col-8">Tarea</th>
            <th scope="col" className="col-4">Fecha y hora</th> 
          </tr>
        </thead>
        <tbody>
          
            {todoList.map((todo) => {
              return (
                <>
                <tr key={todo.date} className="table-success">
                  <td style={{ fontWeight: "bold"}}>{todo.name}</td>
                  <td> {todo.date} <i onClick={() => onRemove(todo.date)} className="bi bi-trash" style={{color:'red', cursor:'pointer'}}></i></td>
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
