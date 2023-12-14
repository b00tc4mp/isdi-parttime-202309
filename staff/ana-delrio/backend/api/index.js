const express = require('express')
const registerUser = require('./logic/registerUser')

const server = express()

server.get('/', (req, res) => res.send('Hello, World!'))

// middleware: es un software que esta en el medio entre la petición y la respuesta
// TEST in browser GET http://localhost:8000/hello?name=Ana&surname=delRio
server.get('/hello', (req, res) => res.send(`Hello, ${req.query.name} ${req.query.surname}!`))

// es un middelware: te permite convertir cualquier peticion que le enviemos al servidor con un cuerpo json, lo convierte a objeto, en la propiedad body de la request
const jsonBodyParser = express.json()

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