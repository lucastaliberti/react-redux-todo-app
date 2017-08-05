import React from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import {compose, withState, withHandlers, lifecycle} from 'recompose'

const URL = 'http://localhost:3003/api/todos'

const Todo = props => {
  const {
      description,
      list,
      handleChange,
      handleAdd,
      handleRemove,
      handleMarkAsDone,
      handleMarkAsPending,
      handleSearch,
      handleClear
    } = props

  return (
    <div>
      <PageHeader name='Tarefas' small='Cadastro' />
      <TodoForm
        handleAdd={handleAdd}
        handleSearch={handleSearch}
        handleClear={handleClear}
        description={description}
        handleChange={handleChange} />
      <TodoList
        list={list}
        handleMarkAsDone={handleMarkAsDone}
        handleMarkAsPending={handleMarkAsPending}
        handleRemove={handleRemove} />
    </div>
  )
}

const enhance = compose(
  withState('description', 'setDescription', ''),
  withState('list', 'setList', []),
  withHandlers({
    refresh: ({setDescription, setList}) => (description = '') => {
      const search = description ? `&description__regex=/${description}/i` : ''
      axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => {
          setDescription(description)
          setList(resp.data)
        })
    }
  }),
  withHandlers({
    handleAdd: ({description, refresh}) => () => {
      axios.post(URL, {description})
        .then(resp => refresh())
    },
    handleRemove: ({description, refresh}) => (_id) => {
      axios.delete(`${URL}/${_id}`)
        .then(resp => refresh(description))
    },
    handleMarkAsDone: ({description, refresh}) => (todo) => {
      axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(resp => refresh(description))
    },
    handleMarkAsPending: ({description, refresh}) => (todo) => {
      axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(resp => refresh(description))
    },
    handleSearch: ({description, refresh}) => () => {
      refresh(description)
    },
    handleClear: ({refresh}) => () => {
      refresh()
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
