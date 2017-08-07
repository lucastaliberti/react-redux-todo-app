import React from 'react'
import {Table} from 'react-bootstrap'
import {compose, defaultProps} from 'recompose'
import {css} from 'aphrodite'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import IconButton from '../template/IconButton'
import style from '../template/style'

import {markAsDone, markAsPending, remove} from './todoActions'

const TodoList = props => {
  const {
    list,
    markAsDone,
    markAsPending,
    remove
  } = props

  const renderRows = () => list.map((todo) =>
    <tr key={todo._id}>
      <td className={css(todo.done && style.markedAsDone)}>{todo.description}</td>
      <td>
        <IconButton type='success' icon='check'
          hide={todo.done}
          onClick={() => markAsDone(todo)} />
        <IconButton type='warning' icon='undo'
          hide={!todo.done}
          onClick={() => markAsPending(todo)} />
        <IconButton type='danger' icon='trash-o'
          hide={!todo.done}
          onClick={() => remove(todo)} />
      </td>
    </tr>)

  return (
    <Table striped condensed>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className={css(style.formActions)}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </Table>
  )
}

export const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch =>
  bindActionCreators({markAsDone, markAsPending, remove}, dispatch)

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  defaultProps({list: []})
)

export {TodoList}
export default enhance(TodoList)
