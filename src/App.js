import {initialState} from './data.js'
import { useReducer } from "react";
import { todosReducer } from "./reducers/todosReducer";
import './App.css';
import Todo from './components/Todo.js';
import Form from './components/Form.js';

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  return (
    <div className='container'>
      <h1>Todo List App</h1>
      <Form  dispatch={dispatch}/>
      <Todo state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
