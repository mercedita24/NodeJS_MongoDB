'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Product = require('./models/product')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false})) //se le agregan los middelware
app.use(bodyParser.json())

app.get('/api/product', (req, res) => { //(peticion , respuesta)
    res.status(200).send({products:[]}) //Get de productos
})

app.get('/api/product/:productId', (req, res) => { 
    
})

app.post('/api/product', (req, res) => { 
    console.log(req.body) //por si falla q nos muestre q viene en el request
    
    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => { //recibe un error en caso q lo hubiera y cuando se alamacene mongo por defecto le almancenara un ID
        if(err) res.status(500).send ({message: `Error al guardar en la BD: ${err}`})

        //si marcha todo bien
        res.status(200).send({product: productStored})
    }) 
})

app.put('/api/product/:productId', (req, res) => { 
    
})

app.delete('/api/product/:productId', (req, res) => { 
    
})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la BD: ${err}`)
    }
    console.log('Conexion a la BD exitosa..!!')

    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})
