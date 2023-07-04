import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [inputText, setInputText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addTask(inputText);
    e.currentTarget.reset();
  };
  console.log(inputText);

  return (
    <form className="form" onSubmit={(e) => submitHandler(e)}  >
      <div style={{margin: '1rem' }}> 
        <input type="text" className="input-task" onChange={(e) => setInputText(e.currentTarget.value)}  />
        
      </div> 
        <button type="submit" className="btn btn-success" style={{margin: '10px', padding: '7px'}}>Agregar tarea</button>
    </form>
  );
};

export default Form;
