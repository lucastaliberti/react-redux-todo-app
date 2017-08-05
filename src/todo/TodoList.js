import React from 'react'
import {Table} from 'react-bootstrap'
import {defaultProps} from 'recompose'
import {css} from 'aphrodite'

import IconButton from '../template/IconButton'
import style from './style'

const TodoList = props => {
  const {
    list,
    handleMarkAsDone,
    handleMarkAsPending,
    handleRemove} = props

  const renderRows = () => list.map((todo) =>
    <tr key={todo._id}>
      <td className={css(todo.done && style.markedAsDone)}>{todo.description}</td>
      <td>
        <IconButton type='success' icon='check'
          hide={todo.done}
          className={css(style.button)}
          onClick={() => handleMarkAsDone(todo)} />
        <IconButton type='warning' icon='undo'
          hide={!todo.done}
          className={css(style.button)}
          onClick={() => handleMarkAsPending(todo)} />
        <IconButton type='danger' icon='trash-o'
          hide={!todo.done}
          onClick={() => handleRemove(todo._id)} />
      </td>
    </tr>)

  return (
    <Table striped condensed>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </Table>
  )
}

export default defaultProps({list: []})(TodoList)
