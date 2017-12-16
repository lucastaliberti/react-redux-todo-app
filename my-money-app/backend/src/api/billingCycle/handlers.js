const defaultErrorHandler = (res, error) => {
  res.status(500).json({
    errors: [error]
  })
}

const defaultResultHandler = (res, value) => {
  res.json({ value })
}

const aggregateResultHandler = (res, value) => {
  res.json(value[0] || { credit: 0, debt: 0 })
}

const makeCallBackHandler = (req, res, next) => (
  errorHandler,
  resultHandler
) => (error, value) => {
  if (error) errorHandler(res, error)
  else resultHandler(res, value)
}

const projectValues = () => ({
  $project: {
    credit: { $sum: '$credits.value' },
    debt: { $sum: '$debts.value' }
  }
})

const groupByNull = () => ({
  $group: {
    _id: null,
    credit: { $sum: '$credit' },
    debt: { $sum: '$debt' }
  }
})

const projectResultFields = () => ({
  $project: {
    _id: 0,
    credit: 1,
    debt: 1
  }
})

module.exports = {
  defaultErrorHandler,
  defaultResultHandler,
  aggregateResultHandler,
  makeCallBackHandler,
  projectValues,
  groupByNull,
  projectResultFields
}
