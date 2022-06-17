import React, { useState } from 'react'
import { Button, Card, Modal, Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, updateTodo } from '../store/actions/index';
import Subtask from './Subtask';

const Tasks = () => {
  let style = { whiteSpace: "unset", textOverflow: "unset" }
  const dispatch = useDispatch();
  const todoList = useSelector((state) => { return state.todoList });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [edit, setEdit] = useState("");
  const resetFields = () => {
    setEdit("");
    setIsModalVisible(false);
  }
  return (
    <div className='content-wrapper'>
      <div className='child'>
        <div className="site-card-wrapper">
          <Row justify='space-evenly'>
            {
              todoList.taskTypes.map((title, index) => {
                return (
                  <>
                    <Col>
                      <Card style={{ ...style, background: todoList.color[index] }} title={<h2 id="title">{title} &nbsp;</h2>} bordered={false}
                        extra={
                          <>
                            <Row justify='start'>
                              <Col span={24}>
                                <Button title='Delete' type='dashed'
                                  onClick={() => { dispatch(deleteTodo(title)) }}
                                  size='small' danger ghost>Delete List</Button> &nbsp;
                                <Button title='Edit' type='primary' size='small' onClick={() => {
                                  return (
                                    setIsModalVisible(true),
                                    dispatch(editTodo(title))
                                  )
                                }} ghost>Edit Title</Button>
                              </Col>
                            </Row>
                            <Modal title="Edit Title" visible={isModalVisible}
                              onOk={() => {
                                return (
                                  !edit.trim().length
                                    ? alert("Please fill it out")
                                    : dispatch(updateTodo(edit)), resetFields()
                                )
                              }}
                              onCancel={() => resetFields()}>
                              <input type="text" value={edit} placeholder="Enter new Title" onChange={(e) => { setEdit(e.target.value) }} />
                            </Modal>
                          </>
                        }>
                        <Subtask todoList={todoList} title={title} />
                      </Card>
                    </Col>
                  </>
                )
              })
            }
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Tasks
