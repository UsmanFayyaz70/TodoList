import React from 'react'

const Todo = (props) => {
    // console.log(props, "String meow");
  return (
    <div>
        { props.todoItem.length!==0? 
            props.todoItem.map((todoItem)=>{
                return(
                    <div align = "left">
                    <p>{todoItem.description} to be done at {todoItem.time}</p>
                    <button 
                    className='btn btn-danger' onClick = {()=>{props.onClick(todoItem)}}>Delete</button>
                    <button type="button" onClick = {() => props.onSubmit(todoItem)} className="btn btn-info">Edit</button>
                    </div>
                )
            }):"The list has been transformed to an empty list due to your doings!"

        }
    </div>
  )
}

export default Todo
