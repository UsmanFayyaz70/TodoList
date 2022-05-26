import { Col, Row } from 'antd'
import React from 'react'
import Todo from './Todo'
const TodoList = (props) => {
    // console.log(props.todoItem,"String")
  return (
  //   <div className='App'>
      <Row style={{width:"100%"}}>
        <Col span = {12} xl={12} xs={12} md = {12} lg = {12} >
        </Col>
        <Todo onSubmit={props.onSubmit} onClick = {props.onClick} todoItem={props.todoItem}/>
       </Row>
      
    // </div>
  )
}

export default TodoList
