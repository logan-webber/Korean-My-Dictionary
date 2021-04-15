const express = require('express')
const db = require('../db/languages')
const router = express.Router()

router.get('/', (req, res) => {
    db.getLanguages()
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

module.exports = router