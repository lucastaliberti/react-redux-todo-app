import { all } from 'redux-saga/effects'
import { getSummary, watchGetSummary } from '../Dashboard/sagas'

export default function* rootSaga() {
  yield all([getSummary(), watchGetSummary()])
}
