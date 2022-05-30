import { Col, Row } from 'antd'
import React from 'react'
import Todo from './Todo'
const TodoList = (props) => {
    // console.log(props.todoItem,"String")
    // console.log("handleArr ==>",props.handleArr);

  return (
  //   <div className='App'>
      <Row style={{width:"100%"}}>
        <Col span = {12} xl={12} xs={12} md = {12} lg = {12} >
        </Col>
        <Todo handleArr={props.handleArr} onSubmit={props.onSubmit} edit={props.edit} onClick = {props.onClick} todoItem={props.todoItem}/>
       </Row>
      
    // </div>
  )
}

export default TodoList