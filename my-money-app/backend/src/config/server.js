const PORT = 3003

const bodyParser = require('body-parser')
const express = require('express')

const allowCors = require('./cors')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(PORT, function() {
  console.log(`BACKEND is running on port ${PORT}`)
})

module.exports = server
