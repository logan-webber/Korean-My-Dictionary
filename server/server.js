const express = require('express')
const path = require('path')

const wordsRoutes = require('./routes/word')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
// const languageRoutes = require('./routes/languages')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/words', wordsRoutes)
server.use('/api/v1/users', userRoutes)
// server.use('/api/v1/languages', languageRoutes)
server.use('/api/v1', authRoutes)

module.exports = server
