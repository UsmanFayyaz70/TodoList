import { Col, Row } from 'antd'
import React from 'react'

const Todo = (props) => {
    // console.log(props, "String meow");
  return (
    <Row  style={{width:"100%"}}>
        { props.todoItem.length!==0? 
            props.todoItem.map((todoItem,ind)=>{
                return(
                   
                    // <Col span = {24}  style={{width:"100%",border:" solid yellow"}}>
                    <Col span = {24}  style={{width:"100%"}}>
                        <p>{todoItem.description} to be done at {todoItem.time}</p>
                        
                        {/* <Row justify='center' style={{width:"100%",border:" solid yellow",display:"flex" ,justifyContent:"space-between"}} gutter={[10,10]}> */}
                        <Row justify='center' style={{width:"100%",display:"flex" ,justifyContent:"space-between"}} gutter={[10,10]}>
                        {/* <Col style={{border: "solid black", justifyContent: "flex-end", display:"flex"}}  */}
                        <Col style={{justifyContent: "flex-end", display:"flex"}} 
                        xl={3} xs={3} md = {3} lg = {3}>
                          <button 
                            className='btn btn-danger' onClick = {()=>{props.onClick(todoItem)}}>Delete</button>
                        </Col>
                        {/* <Col style={{border: "solid red"}} xl={21} xs={21} md = {21} lg = {21}> */}
                        <Col xl={21} xs={21} md = {21} lg = {21}>
                        <button type="button" onClick = {() => props.onSubmit(todoItem)} className="btn btn-info">Edit</button>
                        </Col>
                        </Row>
                        </Col>
                
                )
            }):"The list has been transformed to an empty list due to your doings!"

        }
     </Row>
  )
}

export default Todo
