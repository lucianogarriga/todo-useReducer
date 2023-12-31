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
import ToDoComponent from './components/ToDoList/ToDoComponent'
 
function App() { 
 
  return (
    <> 
      <div className="App" >
        <Gretting text="Proyecto con React"/>  
        <ToDoComponent/>
      </div>
    </>
  )
}

export default App
