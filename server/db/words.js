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

function updateWord (id, word, db = connection) {
    return db('words').update(word).where('id', id)
    .then(rowCount => {
        console.log(rowCount)
        return rowCount
    })
}

function getTheRightLanguage(id, db = connection){
    return db('words')
    .join('languages', 'language.id', 'words.language_id')
    .where('language_id', id)
}

function getTheRightUser(id, db = connection) {
    return db('words')
        .join('users', 'user.id', 'words.user_id')
        .where('user_id', id)
}

// function getWordByLanguageId (id, db = connection){
//     return db('words')
//     .where('words.language_id')
// }

module.exports = {
    getWord,
    addWord,
    deleteWord,
    updateWord,
    // getWordByLanguageId,
    getTheRightLanguage,
    getTheRightUser
}