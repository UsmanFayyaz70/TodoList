import React, { useState } from 'react';
import { TimePicker, Form, Input, Button, Checkbox } from 'antd';
import moment from 'moment';

const Footer = (props) => {
        const [task, setTask] = useState("");
        const [time, setTime] = useState(0);
        const submit = (e) => {
            // console.log("Youve reached submit!"+ task + " " +time);
            props.addTodo(task, time);
        }
    
      return (
        <Form
            onFinish= {submit}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            autoComplete="off"
        >
          <Form.Item
            label="Enter your task"
            name="task"
            value = {task}
            onChange = {(e)=>setTask(e.target.value)}
            rules={[{ required: true, message: 'Please input your task!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: 'Please input the time!' }]}
          >
         <TimePicker  value = {time} 
         onChange = {(e)=>console.log("e of time",e)} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />

          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
    };

export default Footer
