
import React from 'react'
import {shallow} from 'enzyme'
import {StyleSheetTestUtils} from 'aphrodite'

import {TodoForm} from '../TodoForm'

import IconButton from '../../template/IconButton'

const storeStateMock = {
  todo: {
    description: 'estudar testes',
    list: [
      {
        '_id': '1',
        'description': 'teste para estudar',
        '__v': 0,
        'createdAt': '2017-08-05T23:48:19.550Z',
        'done': false
      }
    ]
  }
}

const setup = () => {
  const props = {
    description: storeStateMock.todo.description,
    changeDescription: jest.fn(),
    add: jest.fn(),
    search: jest.fn(),
    clear: jest.fn()
  }

  const wrapper = shallow(<TodoForm {...props} />)

  return {
    props,
    wrapper
  }
}
let wrapper = null
let props = {}

describe('TODO Form Component', () => {
  beforeEach(() => {
    ({wrapper, props} = setup())
    StyleSheetTestUtils.suppressStyleInjection()
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('Should have a div wrapping all', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('Should render a FormControl', () => {
    expect(wrapper.find('FormControl')).toHaveLength(1)

    const formControlProps = wrapper.find('FormControl').props()
    expect(formControlProps.value).toEqual(storeStateMock.todo.description)
    expect(formControlProps.placeholder).toEqual('Adicionar tarefa')
  })

  it('FormControl should dispatch changeDescription on onChange event', () => {
    const formControlProps = wrapper.find('FormControl').props()

    formControlProps.onChange('')
    expect(props.changeDescription.mock.calls.length).toBe(1)
  })

  it('Should render 3 IconButton', () => {
    expect(wrapper.find(IconButton)).toHaveLength(3)
  })

  it('first IconButton should dispatch add', () => {
    const IconButtonProps = wrapper.find(IconButton).get(0).props

    IconButtonProps.onClick('')
    expect(props.add.mock.calls.length).toBe(1)
  })

  it('second IconButton should dispatch search', () => {
    const IconButtonProps = wrapper.find(IconButton).get(1).props

    IconButtonProps.onClick('')
    expect(props.search.mock.calls.length).toBe(1)
  })

  it('third IconButton should dispatch clear', () => {
    const IconButtonProps = wrapper.find(IconButton).get(2).props

    IconButtonProps.onClick('')
    expect(props.clear.mock.calls.length).toBe(1)
  })
})
