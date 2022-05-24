import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import TodoList from './Components/TodoList'
import {useState} from "react";

function App() {
  const addTodo = (ntask, time) => {
    const arrkey = todo.length + 1;
    let nArr =  {
      key: arrkey,
      task: ntask,
      time: time
    };
    console.log(nArr);
    setTodo([...todo,nArr]);
    alert("New todo added!");
  }
  const btnPressed = (todoItem) =>{
  console.log(todoItem,"App STRING");
    setTodo(todo.filter((todo)=>{
      return todo!==todoItem 
    }));
}

  const [todo, setTodo] = useState([
    {
      key: 1,
      description: "Get Coffee",
      time: "9:00"
    },
    {
      key: 2,
      description: "Get a walk",
      time: "9:00"
    },
    {
      key: 3,
      description: "Get Tea",
      time: "9:00"
    }
  ]);

      return(
      <>
      <Header/>
      <TodoList todoItem = {todo} key = {todo.key} onClick = {btnPressed}/>
      <Footer addTodo = {addTodo}/> 
      </>
  
      )
}

export default App;
