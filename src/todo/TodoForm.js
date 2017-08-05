import React from 'react'
import {Col, FormControl} from 'react-bootstrap'
import IconButton from '../template/IconButton'

const TodoForm = ({description, handleChange, handleAdd}) => {
  return (
    <div role='form' className='todo-form'>
      <Col xs={12} sm={9} md={10}>
        <FormControl
          id='description'
          type='text'
          placeholder='Adicionar tarefa'
          onChange={handleChange}
          value={description}
          />
      </Col>
      <Col xs={12} sm={3} md={2} >
        <IconButton type='primary' icon='plus' onClick={handleAdd} />
      </Col>
    </div>
  )
}

export default TodoForm
