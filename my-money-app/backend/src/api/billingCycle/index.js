const BillingCycle = require('./schema')
const errorHandler = require('../common/errorHandler')
const {
  defaultErrorHandler,
  defaultResultHandler,
  aggregateResultHandler,
  makeCallBackHandler,
  projectValues,
  groupByNull,
  projectResultFields
} = require('./handlers')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({
  new: true,
  runValidators: true
})
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
  const countCallBackHandler = makeCallBackHandler(req, res, next)(
    defaultErrorHandler,
    defaultResultHandler
  )
  BillingCycle.count(countCallBackHandler)
})

BillingCycle.route('summary', (req, res, next) => {
  const summaryCallBackHandler = makeCallBackHandler(req, res, next)(
    defaultErrorHandler,
    aggregateResultHandler
  )

  BillingCycle.aggregate(
    projectValues(),
    groupByNull(),
    projectResultFields(),
    summaryCallBackHandler
  )
})

module.exports = BillingCycle
