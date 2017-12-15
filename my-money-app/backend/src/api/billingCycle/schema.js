const restful = require('node-restful')
const mongoose = restful.mongoose

const debitEnum = ['PAGO', 'PENDENTE', 'AGENDADO']

const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true }
})

const debitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
  status: { type: String, required: false, uppercase: true, enum: debitEnum }
})

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 0, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  credits: [creditSchema],
  debts: [debitSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
