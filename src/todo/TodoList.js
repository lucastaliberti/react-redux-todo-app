import React from 'react'
import {Table} from 'react-bootstrap'
import {defaultProps} from 'recompose'

import IconButton from '../template/IconButton'

const TodoList = ({list, handleRemove}) => {
  const renderRows = () => list.map(({_id, description}) =>
    <tr key={_id}>
      <td>{description}</td>
      <td>
        <IconButton
          type='danger'
          icon='trash-o'
          onClick={() => handleRemove(_id)} />
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
