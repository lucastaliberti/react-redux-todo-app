
import React from 'react'
import {shallow} from 'enzyme'
import {StyleSheetTestUtils} from 'aphrodite'
import {TodoList, mapStateToProps} from '../TodoList'

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

const setup = (storeStateMock) => {
  const props = {
    list: storeStateMock.todo.list,
    markAsDone: jest.fn(),
    markAsPending: jest.fn(),
    remove: jest.fn()
  }

  const wrapper = shallow(<TodoList {...props} />)

  return {
    props,
    wrapper
  }
}
let wrapper = null
let props = {}

describe('TODO Component', () => {
  beforeEach(() => {
    ({wrapper, props} = setup(storeStateMock))
    StyleSheetTestUtils.suppressStyleInjection()
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('Should mapStateToProps correctly', () => {
    const list = storeStateMock.todo.list
    expect(mapStateToProps(storeStateMock)).toEqual({list})
  })

  it('Should have a div wrapping all', () => {
    expect(wrapper.find('Table')).toHaveLength(1)
  })

  it('Should render 3 IconButton', () => {
    expect(wrapper.find(IconButton).find({hide: false})).toHaveLength(1)
    expect(wrapper.find(IconButton).find({hide: true})).toHaveLength(2)
  })

  it('Should dispatch markAsDone on click', () => {
    const IconButtonProps = wrapper.find(IconButton).find({hide: false}).props()

    IconButtonProps.onClick('')
    expect(props.markAsDone.mock.calls.length).toBe(1)
  })

  it('Should dispatch markAsPending on click', () => {
    storeStateMock.todo.list[0].done = true;
    ({wrapper, props} = setup(storeStateMock))
    const IconButtonProps = wrapper.find(IconButton).find({hide: false}).get(0).props
    IconButtonProps.onClick('')
    expect(props.markAsPending.mock.calls.length).toBe(1)
  })

  it('Should dispatch remove on click', () => {
    storeStateMock.todo.list[0].done = true;
    ({wrapper, props} = setup(storeStateMock))
    const IconButtonProps = wrapper.find(IconButton).find({hide: false}).get(1).props
    IconButtonProps.onClick('')
    expect(props.remove.mock.calls.length).toBe(1)
  })
})
