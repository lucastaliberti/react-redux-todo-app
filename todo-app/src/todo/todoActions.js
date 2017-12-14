import axios from 'axios'
import {
   TODO_DESCRIPTION_CHANGED
  , TODO_SEARCHED
  , TODO_CLEAR
}
from './todoReducer'

export const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
  type: TODO_DESCRIPTION_CHANGED,
  payload: event.target.value
})

export const search = () => (dispatch, getState) => {
  const description = getState().todo.description
  const search = description ? `&description__regex=/${description}/i` : ''

  return axios.get(`${URL}?sort=-createdAt${search}`)
    .then(resp => dispatch(todoSearched(resp.data)))
}

const todoSearched = (body) => ({
  type: TODO_SEARCHED,
  payload: body
})

export const add = description => dispatch =>
  axios.post(URL, {description})
    .then(resp => dispatch(clear()))

export const markAsDone = todo => dispatch =>
  axios.put(`${URL}/${todo._id}`, {...todo, done: true})
    .then(resp => dispatch(search()))

export const markAsPending = todo => dispatch =>
  axios.put(`${URL}/${todo._id}`, {...todo, done: false})
    .then(resp => dispatch(search()))

export const remove = todo => dispatch =>
  axios.delete(`${URL}/${todo._id}`)
    .then(resp => dispatch(search()))

export const clear = () => dispatch => {
  dispatch({type: TODO_CLEAR})
  return dispatch(search())
}
