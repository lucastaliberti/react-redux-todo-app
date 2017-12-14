import systemUnderTest, {
  INITIAL_STATE
  , TODO_DESCRIPTION_CHANGED
  , TODO_SEARCHED
  , TODO_CLEAR
}
from '../todoReducer'

const mockData = {
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

describe('TodoReducer', () => {
  let state

  beforeEach(() => {
    state = systemUnderTest(undefined, { type: '' })
  })

  it('Should start with the initial state', () => {
    expect(state).toEqual(INITIAL_STATE)
  })

  it('Should add the list items to the state on search', () => {
    state = systemUnderTest(state, { type: TODO_SEARCHED, payload: mockData.list })

    expect(state.list.length).toBe(1)
    expect(state.list).toEqual(mockData.list)
  })

  it('Should change the description', () => {
    state = systemUnderTest(state, { type: TODO_DESCRIPTION_CHANGED, payload: mockData.description })

    expect(state.description.length).toBeGreaterThan(0)
    expect(state.description).toEqual(mockData.description)
  })

  it('Should clear the description', () => {
    state = systemUnderTest(state, { type: TODO_CLEAR })

    expect(state.description.length).toBe(0)
    expect(state.description).toEqual('')
  })
})
