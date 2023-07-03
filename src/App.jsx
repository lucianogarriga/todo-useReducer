import { useReducer } from 'react'
import './App.css'
// Import components 
import Button from './components/Button'
import Counter from './components/Counter'
import Gretting from './components/Gretting'
import Form from './components/ToDoList/Form'
import ToDoList from './components/ToDoList/ToDoList'
import Users from './components/Users'
import UsersClassComponent from './components/UsersClassComponent'
import UsersHook from './components/UsersHook'
import USERS_DATA from './data/users.json' 



const initialState = []

const todosReducer = (state, action ) =>{
  switch (action.type) {
    case "add":
      return [...state, action.payload]
      default:
        return state;
  }
}

function App() { 

  const [todoListState, dispatch] = useReducer(todosReducer, initialState) 

  console.log(todoListState);

  function addTaskHandler(text){
    dispatch({
      type:"add",
      payload: {
        name: text,
        date: new Date().toLocaleString(), 
      }
    })
  }

  return (
    <> 
      <div className="App">
        <Gretting text="Proyecto con React"/>  
        <Form addTask={addTaskHandler}/>
        <ToDoList todoList={todoListState}/>
      </div>
    </>
  )
}

export default App
