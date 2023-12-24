const express = require('express')
const registerUser = require('./logic/registerUser')

const server = express()

// server.get('/', (req, res) => res.send('hello world'))

// // TEST in browser GET http://localhost:8000/hello?name=Isa&surname=Dominguez
// server.get('/hello', (req, res) => res.send(`Hello, ${req.query.name} ${req.query.surname}!`))

const jsonBodyParser = express.json() //Te permite convertir cualquier petición que le enviemos al servidor con un cuerpo json lo convierte a objeto en la propiedad body de la request(req). Es un middleware.

server.post('/register', jsonBodyParser, (req, res) => {
    try {
        const { name, email, password } = req.body

        registerUser(name, email, password, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

server.listen(8000, () => console.log('server is up'))