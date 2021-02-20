const { connect } = require('../routes/word')
const connection = require('./connection')

function getWord (db = connection){
    return db('words').select()
}

function addWord (word, db = connection) {
    return db('words').insert(word)
    .then(ids => ids[0])
}

module.exports = {
    getWord,
    addWord,
}