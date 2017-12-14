import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import {
  INITIAL_STATE
  , TODO_DESCRIPTION_CHANGED
  , TODO_SEARCHED
  , TODO_CLEAR
} from '../todoReducer'

import {
  URL
  , changeDescription
  , search
  , add
  , markAsDone
  , markAsPending
  , remove
  , clear
} from '../todoActions'

axios.defaults.host = URL
axios.defaults.adapter = httpAdapter

const mockData = {
  event: {
    target: {
      value: 'estudar testes'
    }
  },
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

const middlewares = [thunk.withExtraArgument({axios}), multi]
const mockStore = configureMockStore(middlewares)

const mockedURL = nock(URL)

describe('TodoActions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('Should change the description', () => {
    expect(changeDescription(mockData.event))
    .toEqual({ type: TODO_DESCRIPTION_CHANGED, payload: 'estudar testes' })
  })

  it('Should refresh the list', () => {
    mockedURL.get('').query(() => true).reply(200, mockData.todo.list)

    const expectedActions = [
      { type: TODO_SEARCHED, payload: mockData.todo.list }
    ]
    const store = mockStore({todo: INITIAL_STATE})

    return store.dispatch(search()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Should refresh the list with filter', () => {
    mockedURL.get('').query(() => true).reply(200, mockData.todo.list)

    const expectedActions = [
      { type: TODO_SEARCHED, payload: mockData.todo.list }
    ]
    const store = mockStore({
      todo: {
        description: 'test'
      }
    })

    return store.dispatch(search()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Should add, clear the form and refresh', () => {
    mockedURL
      .post('').query(() => true).reply(201, mockData.todo.list)
      .get('').query(() => true).reply(200, mockData.todo.list)

    const expectedActions = [
      { type: TODO_CLEAR },
      { type: TODO_SEARCHED, payload: mockData.todo.list }
    ]
    const store = mockStore({todo: INITIAL_STATE})

    return store.dispatch(add({description: mockData.todo.description})).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Should mark as done and refresh', () => {
    mockedURL
      .put('/1').query(() => true).reply(201, mockData.todo.list)
      .get('').query(() => true).reply(200, mockData.todo.list)

    const expectedActions = [
      { type: TODO_SEARCHED, payload: mockData.todo.list }
    ]
    const store = mockStore({todo: INITIAL_STATE})

    return store.dispatch(markAsDone(mockData.todo.list[0])).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Should mark as pending and refresh', () => {
    mockedURL
      .put('/1').query(() => true).reply(201, mockData.todo.list)
      .get('').query(() => true).reply(200, mockData.todo.list)

    const expectedActions = [
      { type: TODO_SEARCHED, payload: mockData.todo.list }
    ]
    const store = mockStore({todo: INITIAL_STATE})

    return store.dispatch(markAsPending(mockData.todo.list[0])).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Should remove and refresh', () => {
    mockedURL
      .delete('/1').query(() => true).reply(201, mockData.todo.list)
      .get('').query(() => true).reply(200, mockData.todo.list)

    const expectedActions = [
      { type: TODO_SEARCHED, payload: mockData.todo.list }
    ]
    const store = mockStore({todo: INITIAL_STATE})

    return store.dispatch(remove(mockData.todo.list[0])).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Should clear the form and refresh the list', () => {
    mockedURL.get('').query(() => true).reply(200, mockData.todo.list)

    const expectedActions = [
      {type: TODO_CLEAR},
      { type: TODO_SEARCHED, payload: mockData.todo.list }
    ]
    const store = mockStore({todo: INITIAL_STATE})

    return store.dispatch(clear()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
