const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TODO/DESCRIPTION_CHANGED':
      return {...state, description: action.payload}
    case 'TODO/TODO_SEARCHED':
      return {...state, list: action.payload}
    case 'TODO/TODO_CLEAR':
      return {...state, description: ''}
    default:
      return state
  }
}
