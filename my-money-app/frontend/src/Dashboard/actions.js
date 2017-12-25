import { createAction } from 'redux-actions'
import {
  BILLING_CYCLE_FETCH,
  BILLING_CYCLE_FETCHED,
  BILLING_CYCLE_FETCH_FAILED
} from './types'

export const dataFetch = createAction(BILLING_CYCLE_FETCH)
export const dataFetched = createAction(BILLING_CYCLE_FETCHED)
export const dataFetchFailed = createAction(BILLING_CYCLE_FETCH_FAILED)
