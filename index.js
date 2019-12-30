'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false})) //se le agregan los middelware
app.use(bodyParser.json())

app.get('/hola/:name', (req, res) => {
    res.send({message: `Hola ${req.params.name}`}) //Get con parametros
})


app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
})