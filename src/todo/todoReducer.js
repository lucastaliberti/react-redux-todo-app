export const INITIAL_STATE = { description: '', list: [] }
export const TODO_DESCRIPTION_CHANGED = 'TODO/DESCRIPTION_CHANGED'
export const TODO_SEARCHED = 'TODO/TODO_SEARCHED'
export const TODO_CLEAR = 'TODO/TODO_CLEAR'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_DESCRIPTION_CHANGED:
      return {...state, description: action.payload}
    case TODO_SEARCHED:
      return {...state, list: action.payload}
    case TODO_CLEAR:
      return {...state, description: ''}
    default:
      return state
  }
}
