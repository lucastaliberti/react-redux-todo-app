import { put, call, takeLatest } from 'redux-saga/effects'
import { BILLING_CYCLE_FETCH } from './types'
import { dataFetched, dataFetchFailed } from './actions'
import { getSummaryData } from './data'

export function* getSummary() {
  try {
    const json = yield call(getSummaryData)
    yield put(dataFetched(json))
  } catch (error) {
    yield put(dataFetchFailed(error))
  }
}

export function* watchGetSummary() {
  yield takeLatest(BILLING_CYCLE_FETCH, getSummary)
}
