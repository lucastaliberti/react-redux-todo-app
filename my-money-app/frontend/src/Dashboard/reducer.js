import { handleActions } from 'redux-actions'
import { BILLING_CYCLE_FETCHED } from './types'
const INITIAL_STATE = { summary: { credit: 0, debt: 0 } }

const reducer = handleActions(
  {
    [BILLING_CYCLE_FETCHED]: (state, action) => ({
      ...state,
      summary: action.payload.data
    })
  },
  INITIAL_STATE
)

export default reducer
