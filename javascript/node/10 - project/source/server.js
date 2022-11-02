const db = require('./database')
const express = require('express')
const bodyParser = require('body-parser')

const port = 3003
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/products', (req, res) => {
    res.send(db.getAllProducts())
})

app.get('/products/:id', (req, res) => {
    res.send(db.getProductById(req.params.id))
})

app.post('/products', (req, res) => {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product);
})

app.put('/products/:id', (req, res) => {
    const product = db.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product);
})


app.delete('/products/:id', (req, res) => {
    res.send(db.removeProductById(req.params.id))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
