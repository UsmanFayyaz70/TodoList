import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TodoList from './Components/TodoList';
import { useEffect, useState } from "react";
// import { Row, Col, Input, Button } from "antd";
// import AbcDesign from './Container/index';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import About from './Components/About';

function App() {
  const [edit, setEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const editBtn = (todoItem, index) => {
    setEdit(true);
    setSelectedItem(todoItem);
    // console.log(selectedItem,"Function");
    // console.log(handleArr,"Function");
  }

  const addTodo = (task, time) => {
    const found = todo.filter((todo)=>{
      return todo.description === task && todo.time === time
    });
    console.log("Found ==>",found); 
    if(found.length=== 0) 
     {
      if (edit) {
        const index = selectedItem.key - 1;
        const newArr = [...todo];
        // alert("Edit krne lage hoo!"+ task);
        // console.log(index)
        // newArr[index].description = task;
        // newArr[index].time = time;
        newArr.splice(index, 1, { ...selectedItem, description: task, time });
        console.log('Array to edited ==>', task)
        setTodo(newArr);
        setEdit(false);
      } else {
        const arrkey = todo.length + 1;
        setTodo(
          [
            ...todo,
            {
              key: arrkey,
              description: task,
              time: time
            }
          ]
        );
        alert("New todo added!");
        localStorage.setItem('localItems', JSON.stringify(todo));
      }
      setEdit(false);
    } else {
      alert("You can not add a task twice!");
    }
  }
  const btnPressed = (todoItem) => {
    setEdit(false);
    console.log(todoItem, "App STRING");
    setTodo(todo.filter((todo) => {
      return todo !== todoItem
    }));
  }

  const [todo, setTodo] = useState([
    {
      key: 1,
      description: "Get Coffee",
      time: "09:00"
    },
    {
      key: 2,
      description: "Get a walk",
      time: "09:00"
    },
    {
      key: 3,
      description: "Get Tea",
      time: "09:00"
    }
  ]);
  useEffect(()=>{
    const items = localStorage.getItem(JSON.stringify('todo'));
    if(items){
      setTodo(todo);
    }
  })
  return (
    <>
          <Header todo = {todo}/>    
          <TodoList handleArr={selectedItem}   
          onSubmit={editBtn} edit={edit} todoItem={todo} key={todo.key} onClick={btnPressed} />
          <br></br>
          <Footer handleArr={selectedItem} edit={edit} editBtn={editBtn} addTodo={addTodo} />    
    </>

  )
}

export default App;