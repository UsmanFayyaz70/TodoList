import './App.css';
import { Row, Col, Input, Button } from "antd";
import Header from './Components/Header';
import Footer from './Components/Footer';
import TodoList from './Components/TodoList';
// import AbcDesign from './Container/index';
import { useState } from "react";

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
    if (edit) {
      // alert("Edit krne lage hoo!"+ task);
      const index = selectedItem.key - 1;
      // console.log(index)
      const newArr = [...todo];
      newArr[index].description = task;
      newArr[index].time = time;
      // newArr.splice(index, 1, { ...selectedItem, description: task, time });
      console.log('newArsr', task)
      setTodo(newArr);
      setEdit(false);
        } else {
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
  console.log(todo);
  return (
    <>
      <Row>
        <Col xl={24} xs={24} md={24} lg={24}>
          <Row>
            <Col span={24} xl={24} xs={24} md={24} lg={24}><Header /></Col>
          </Row>
          <TodoList onSubmit={editBtn} todoItem={todo} key={todo.key} onClick={btnPressed} />
          <Footer handleArr={selectedItem} edit={edit} editBtn={editBtn} addTodo={addTodo} />
        </Col>
      </Row>
    </>

  )
}

export default App;
