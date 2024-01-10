const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')

const server = express()
server.get('/', (req, res) => res.send('Hello World'))
//server.get('/hello', (req,res) => res.send('Hello !!!'))

//Test in browser GET http://localhost:8000/hello?name=Luis&surname=Garc%C3%ADa
server.get('/hello', (req, res) => res.send(`<h1>Hello, ${req.query.name} ${req.query.surname} !!!</h1>`))

//TEST in browser POST http://localhost:8000/register?name=Pepito+Grillo&email=pepito@grillo.com&paswword=123123123

const jasonBodyParser = express.json()

server.post('/register', jasonBodyParser, (req, res) => {
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

server.post('/login', jasonBodyParser, (req, res) => {
    try {
        const {email, password} = req.body

        authenticateUser(email, password, (error, userId) => {
            
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
                return
            }
            res.json(userId)

        })

    } catch (error) {

        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})



server.listen(8000, () => console.log('server is up'))