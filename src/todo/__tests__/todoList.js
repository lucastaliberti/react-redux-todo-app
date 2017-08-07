
import React from 'react'
import {shallow} from 'enzyme'
import Todo from '../Todo'

import PageHeader from '../../template/PageHeader'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'

describe('TODO Component', () => {
  const wrapper = shallow(
    <Todo />
  )

  it('Should have a div wrapping all', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('Should render a PageHeader component', () => {
    expect(wrapper.find(PageHeader)).toHaveLength(1)
  })

  it('Should render a TodoForm component', () => {
    expect(wrapper.find(TodoForm)).toHaveLength(1)
  })

  it('Should render a TodoList component', () => {
    expect(wrapper.find(TodoList)).toHaveLength(1)
  })
})
