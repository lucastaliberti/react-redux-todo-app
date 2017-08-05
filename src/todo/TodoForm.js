import React from 'react'
import {Col, FormControl} from 'react-bootstrap'
import {css} from 'aphrodite'

import IconButton from '../template/IconButton'
import style from '../template/style'

const TodoForm = props => {
  const {
    description,
    handleChange,
    handleAdd,
    handleSearch,
    handleClear
  } = props

  return (
    <div role='form' className={css(style.formPadding)}>
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
        <IconButton type='info' icon='search' onClick={handleSearch} />
        <IconButton type='default' icon='close' onClick={handleClear} />
      </Col>
    </div>
  )
}

export default TodoForm
