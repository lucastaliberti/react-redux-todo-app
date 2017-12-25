import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export const getSummaryData = async () =>
  await axios.get(`${BASE_URL}/billingCycles/summary`)
