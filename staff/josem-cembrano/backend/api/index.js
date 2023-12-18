const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')

const server = express()

server.get('/', (req, res) => res.send('Hello, World!!')) //Lo que manejamos entre la petición y la respuesta se llama "middleware"

//TEST in browser GET http://localhost:8000/register?name=Zana&surname=Horia
server.get('/hello', (req, res) => res.send(`Hello! ${req.query.name} ${req.query.surname}!!`))

////////////////////////////////////////////////////////////////////////////////////////////////

const jsonBodyParser = express.json()

server.post('/users', jsonBodyParser, (req, res) => {
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

server.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { email, password } = req.body
        authenticateUser(email, password, (error, userId) => {
            if (error) {
                res.status(400).json({ error: error.contructor.name, message: error.message })

                return
            }

            res.json(userId)
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

server.get('/users', (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        retrieveUser(userId, (error, user) => {
            if (error) {
                res.status(401).json({ error: error.constructor.name, message: error.message })

                return
            }
            res.json(user)
        })
    } catch (error) {
        res.status(401).json({ error: error.constructor.name, message: error.message })
    }
})

server.post('/posts', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { image, text } = req.body

        createPost(userId, image, text, error => {
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

server.listen(8000, () => console.log('server is up ⭐!!'))