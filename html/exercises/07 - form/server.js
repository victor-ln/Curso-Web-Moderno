const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080

app.use(bodyParser.urlencoded({extended: true}))

app.post('/users', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>User added</h1>')
})

app.post('/users/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>User updated</h1>')
})

app.listen(port, _ => console.log(`server listening on port ${port}`))
