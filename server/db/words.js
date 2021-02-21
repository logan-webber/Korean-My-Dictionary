const { connect } = require('../routes/word')
const connection = require('./connection')

function getWord (db = connection){
    return db('words').select()
}

function addWord (word, db = connection) {
    return db('words').insert(word)
    .then(ids => ids[0])
}

function deleteWord (id, db = connection) {
    return db('words').delete().where('id', id)
    .then(rowCount => {
        console.log(rowCount)
        return rowCount
    })
}

module.exports = {
    getWord,
    addWord,
    deleteWord
}