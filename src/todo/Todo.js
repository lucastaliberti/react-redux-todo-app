import React from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import {compose, withState, withHandlers, lifecycle} from 'recompose'

const URL = 'http://localhost:3003/api/todos'

const Todo = ({description, list, handleChange, handleAdd, handleRemove}) => (
  <div>
    <PageHeader name='Tarefas' small='Cadastro' />
    <TodoForm
      handleAdd={handleAdd}
      description={description}
      handleChange={handleChange} />
    <TodoList
      list={list}
      handleRemove={handleRemove} />
  </div>
)

const enhance = compose(
  withState('description', 'setDescription', ''),
  withState('list', 'setList', []),
  withHandlers({
    refresh: ({setDescription, setList}) => () => {
      axios.get(`${URL}?sort=-createdAt`)
        .then(resp => {
          setDescription('')
          setList(resp.data)
        })
    }
  }),
  withHandlers({
    handleAdd: ({description, refresh}) => () => {
      axios.post(URL, {description})
        .then(resp => refresh())
    },
    handleRemove: ({refresh}) => (_id) => {
      axios.delete(`${URL}/${_id}`)
        .then(resp => refresh())
    },
    handleChange: ({setDescription}) => e => setDescription(e.target.value)
  }),
  lifecycle({
    componentDidMount () {
      const { refresh } = this.props
      refresh()
    }})
)

export default enhance(Todo)
