import { combineReducers } from 'redux'

import dashboardReducer from '../Dashboard/reducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer
})

export default rootReducer
