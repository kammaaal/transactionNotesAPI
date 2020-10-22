const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.post('/signUp', (req, res) => {
    const result = db.add('accounts', req.body)
    if (result) {
        res.send(result)
    } else {
        res.status(400).send('Wrong body')
    }
})

module.exports = app