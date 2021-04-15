const connection = require('./connection')

function getLanguages(db = connection) {
    return db('languages').select()
}


module.exports = {
    getLanguages,   
}