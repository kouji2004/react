import { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos,setTodos] = useState([
   
  ]);

const todoNameRef = useRef();

const toggleTodo = (id)=>{
  const newTodos =[...todos];
  const todo = newTodos.find((todo)=>todo.id ===id);
  todo.conpleted = !todo.completed;
  setTodos(newTodos);
}

const handleAppTodo = () =>{
  //タスクを追加するする
const name = todoNameRef.current.value
if(name==="") return;
setTodos((prevTodos)=>{
  return[...prevTodos,{id:uuidv4(), name:name,completed: false}];
});
todoNameRef.current.value = null;
};

const handleClear = ()=>{
  const newTodos = todos.filter((todo)=>!todo.conpleted);
  setTodos(newTodos);
};
  return<div>
<TodoList todos={todos} toggleTodo={toggleTodo}/>
<input type="text" ref={todoNameRef}/>
<button onClick={handleAppTodo}>タスクを追加</button>
<button onClick={handleClear}>完了したタスクの削除</button>
<div>残りのタスク:{todos.filter((todo)=>!todo.conpleted).length}</div>
  </div>
}

export default App;
