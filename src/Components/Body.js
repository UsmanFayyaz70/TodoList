import React from 'react'
import { Button, Modal, Input } from 'antd';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/actions/index';
import Tasks from './Tasks';
import randomColor from 'randomcolor';
const Body = () => {
  const todoList = useSelector((state) => state.todoList);
  const [editTaskType, setEditTaskType] = useState("");
  const [taskType, setTaskType] = useState("select");
  const [task, setTask] = useState("");
  const [modalVisible, setModalVisible] = useState("");
  const dispatch = useDispatch();
  var color = randomColor();
 
  //--------------Empty Fields--------------
 
  const resetFields = () => {
    return (
      setTask(""),
      setEditTaskType(""),
      setTaskType("select")
    )
  }

  //--------------Action performed on Modal Ok Button--------------
 
  const okBtn = (taskType, task) => {
    if (taskType === "other") {
      return (
        todoList.todos.push({ [editTaskType]: [] }),
        dispatch(addTodo(editTaskType, task)),
        setEditTaskType(""),
        setModalVisible(false))
    } else {
      return (
        dispatch(addTodo(taskType, task)),
        setTask("select"),
        setModalVisible(false)
      )
    }
  }

  //--------------Action performed on Modal Cancel Button--------------
 
  const cancel_btn = () => {
    setModalVisible(false);
    resetFields();
  }


  return (

    <div>
      <div className='App'>
        <h1>Tasks List</h1>
      </div>
      <div className='App'>
        <Button title='Add List' shape='circle' style={{ height: "55px" }} onClick={() => setModalVisible(true)} ghost>
          <img alt='' src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/undefined/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" />
        </Button>
        <h1 style={{ padding: 15, color: "lightgrey" }}> Add List </h1>
      </div>
      <Modal title="Add List" visible={modalVisible} onCancel={cancel_btn} onOk={() => {
        return (
          task.length > 30
            ? (
              alert("Task too long"),
              resetFields()
            )
            : taskType === "select"
              ? alert("Please select the task type!")
              : !task.trim().length
                ? (
                  alert("Add Task!"),
                  resetFields()
                )
                : (
                  okBtn(taskType, task),
                  resetFields()
                )
        )
      }}
      >
        <label className='labels'>Choose your type of task: </label>
        <select id="taskTypes" value={taskType} onChange={(e) => setTaskType(e.target.value)}>
          <option value="select">-----SELECT-----</option>
          {todoList.taskTypes.map((item) => <option value={item}>{item}</option>)}
          <option value="other">Other</option>
        </select>
        <br />
        {
          taskType === "other" &&
          <>
            <label className='labels'>Enter your Task Type: </label>
            <Input size="small" defaultValue={editTaskType}
              placeholder="Enter type" onChange={(e) => setEditTaskType(e.target.value)} />
          </>
        }
        <br />
        <label className='labels'>Enter your Task: </label>
        <Input size="small" value={task} placeholder="Enter task" onChange={(e) => setTask(e.target.value)} />
      </Modal>
      <div>
        <Tasks color={color} />
      </div>
    </div>
  )
}

export default Body
