import React, { useState } from 'react';
import { Row, Form, Input, Button, Col } from 'antd';

const Footer = (props) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState(0);
  const [form] = Form.useForm();

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

  const submit = () => {
    form.resetFields();
    props.addTodo(task, time);
    setTime(0);
    setTask("");
    }    // 
  // if(props.edit&&Object.keys(props.handleArr).length === 0){
  if (props.edit) {
    return (
      // <h1>hello</h1>
      <Row justify='center' >
        <Col span={14}>
          <Form
            form={form}
            onFinish={submit}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            autoComplete="off"
          >
            <Form.Item
              label="Enter your task"
              name="task"
              onChange={(e) => setTask(e.target.value)}
              rules={[{ required: true, message: 'Please input your task!' }]}
            >
              <Input placeholder={props.handleArr.description} />
            </Form.Item>

            <Form.Item
              label="Time"
              name="time"
              rules={[{ required: true, message: 'Please input the time!' }]}
            >
              <input 
              type="time" 
              placeholder={props.handleArr.time} 
              value={time} 
              onChange={(e) => { setTime(e.target.value) }}/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    )
  } else {
    return (
      <Row justify='center' >
        {/* <Col span={14} style={{border: "solid black"}}> */}
        <Col span={14}>
          <Form
            onFinish={submit}
            form={form} 
            {...layout}

          >
            <Form.Item
              label="Enter your task"
              name="task"
              onChange={(e) => setTask(e.target.value)}
              rules={[{ required: true, message: 'Please input your task!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Time"
              name="time"
              rules={[{ required: true, message: 'Please input the time!' }]}
            >
              <input type="time" value={time} onChange={(e) => { setTime(e.target.value) }}></input>

            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }

};

export default Footer
