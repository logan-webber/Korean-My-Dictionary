const { connect } = require('../routes/word')
const connection = require('./connection')

function getWord (db = connection){
    return db('words').select()
}

module.exports = {
    getWord,
}