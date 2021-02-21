const express = require('express')
const db = require('../db/words')
const router = express.Router()

router.get('/', (req, res) => {
    db.getWord()
    .then(results => {
        console.log(results)
        res.json(results)
        return null
    })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Somthing went wrong' })
        })
})

router.post('/', (req, res) => {
    const word = {
        word: req.body.word,
        meaning: req.body.meaning
    }
    db.addWord(word)
    .then(results => {
        console.log(results)
        res.json({results: results})
        return null
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'REEEEEEEE' })
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    db.deleteWord(id)
    .then(results => {
        console.log('routes', results)
        res.json({deletedRows: results})
        return null
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'SHEEEITTT'})
      })
})

module.exports = router