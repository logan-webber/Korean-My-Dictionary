const express = require('express')
const path = require('path')

const wordsRoutes = require('./routes/word')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/words', wordsRoutes)

module.exports = server
