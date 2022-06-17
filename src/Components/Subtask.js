import { Button, Col, Row, Input } from 'antd'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../store/actions';
const Subtask = (props) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [eTask, setETask] = useState("");
  const [eId, setEId] = useState("");
  const set = (task, index) => { return (setETask(task), setEId(index)) }
  const resetFields = () => { return (setEdit(false), setETask("")) }
  return (
    <Row justify="start">
      <Col span={24}>
        <div className='sub'>
          {props.todoList.todos.map((item) => {
            return (item[props.title] || []).map((task, index) => {
              return (
                <div>
                  <input id="cbox2" value="second_checkbox" type="checkbox" /> &nbsp;
                  <label className="span" htmlFor="cbox2" title={task}>
                    {task}
                  </label>

                  <div className='taskButtons'>
                    <Button size='small' shape='round' type='dashed' title='Delete'
                      onClick={() => (setEdit(false), dispatch(deleteTask(props.title, task)))} danger ghost>Delete</Button>&nbsp;
                    <Button size='small' shape='round' type='primary'
                      style={{ background: "rgba(0,0,0,0)" }} title='Edit'
                      onClick={() => {
                        set(task, index)
                        setEdit(true)
                      }} ghost>Edit</Button>
                  </div>
                  {
                    edit && eId === index &&
                    <>
                      &nbsp;<Input style={{ borderRadius:"7px", width: "150px", padding: "1px" }}
                        size="small"
                        allowClear  type="text" value={eTask}
                        onChange={(e) => { setETask(e.target.value) }} /> &nbsp;
                      <Button title='Update' size='small' type="primary"
                        onClick={() => {
                          return (
                            eTask.length > 30
                              ? (
                                alert("String too long"),
                                setETask(""),
                                resetFields()
                              )
                              : (
                                resetFields(),
                                dispatch(editTask(props.title, index, eTask)))
                          )
                        }}
                        shape='round' ghost>Update</Button>
                    </>
                  }
                </div>
              )
            })
          })}
        </div>
      </Col>
    </Row>
  )
}

export default Subtask
