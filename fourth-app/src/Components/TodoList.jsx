import React from 'react'
import Todo from './Todo'
const TodoList = (props) => {
    // console.log(props.todoItem,"String")
  return (
    <div className='App'>
       <Todo onClick = {props.onClick} todoItem={props.todoItem}/>

      
    </div>
  )
}

export default TodoList
