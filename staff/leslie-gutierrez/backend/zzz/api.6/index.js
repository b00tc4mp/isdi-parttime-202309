const express = require('express')
const registerUser = require('./logic/registerUser')

const server = express()

server.get('/', (req, res) => res.send('Hello, World!'))

// TEST in browser GET http://localhost:8000/hello?name=Campa&surname=Nilla
server.get('/hello', (req, res) => res.send(`Hello, ${req.query.name} ${req.query.surname}!`))

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