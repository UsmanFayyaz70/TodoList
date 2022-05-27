import { Col, Row } from 'antd'
import React from 'react'

const Todo = (props) => {
    // console.log(props, "String meow");
  return (
    <Row  justify='center' style={{border:"solid yellow",width:"100%"}}>
        { props.todoItem.length!==0? 
            props.todoItem.map((todoItem,ind)=>{
                return(
                   
                    <Col xl={14} xs={14} md = {14} lg = {14}  style={{width:"100%",  justifyContent:"center"}}>
                    {/* <Col span = {24}  style={{width:"100%"}}> */}
                    <Row justify='center' style={{border: "solid black",width:"100%"}}>
                      <Col style={{border: "solid black"}}>
                          <h6>{todoItem.description} to be done at {todoItem.time}</h6>
                      </Col>
                    </Row>
                        {/* <Row justify='center' style={{width:"100%",border:" solid yellow",display:"flex" ,justifyContent:"space-between"}} gutter={[10,10]}> */}
                        <Row justify='center' style={{width:"100%",display:"flex" ,justifyContent:"space-between"}} gutter={[10,10]}>
                         <Col style={{border: "solid black", justifyContent: "flex-end", display:"flex"}} 
                        // <Col style={{justifyContent: "flex-end", display:"flex"}} 
                        xl={12} xs={12} md = {12} lg = {12}>
                          <button 
                            className='btn btn-danger' onClick = {()=>{props.onClick(todoItem)}}>Delete</button>
                        </Col>
                        <Col style={{border: "solid red", justifyContent: "flex-start", display:"flex"}} 
                        // xl={21} xs={21} md = {21} lg = {21}>
                        xl={12} xs={12} md = {12} lg = {12}>
                        <button type="button" onClick = {() => props.onSubmit(todoItem)} className="btn btn-info">Edit</button>
                        </Col>
                        </Row>
                        </Col>
                        // </Col>
                )
            }):"The list has been transformed to an empty list due to your doings!"

        }
     </Row>
  )
}

export default Todo
