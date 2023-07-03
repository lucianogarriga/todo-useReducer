import React, { useState } from 'react';


const Form = ({addTask}) => {

    const [inputText, setInputText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        addTask(inputText);
        e.currentTarget.reset();
    }
    console.log(inputText);

    return (
        <form onSubmit={e => submitHandler(e)}>
            <input type='text' onChange={e => setInputText(e.currentTarget.value)}/>
            <button type='submit' >Agregar</button>
        </form>
    );
}

export default Form;
