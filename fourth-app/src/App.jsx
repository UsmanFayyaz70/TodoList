import './App.css';
import { Row, Col, Input, Button } from "antd";
import Header from './Components/Header';
import Footer from './Components/Footer';
import TodoList from './Components/TodoList';
import AbcDesign from './Container/index';
import { useState } from "react";

function App() {
  const [edit, setEdit] = useState(false);
  const [obj, setObj] = useState({
  });
  const editBtn = (todoItem) => {
    setEdit(true);
    setObj(todoItem);
    // console.log(obj,"Function");
    // console.log(handleArr,"Function");
  }

  const addTodo = (task, time) => {
    setEdit(false);
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

  return (
    <>
    <Row>
      <Col xl={24} xs={24} md={24} lg = {24}>
        <AbcDesign />
        <Header />
        <TodoList onSubmit={editBtn} todoItem={todo} key={todo.key} onClick={btnPressed} />
        <Footer handleArr={obj} edit={edit} editBtn={editBtn} addTodo={addTodo} />
      </Col>
    </Row>
    </>

  )
}

export default App;
