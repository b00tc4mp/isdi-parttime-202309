const registerUser = require("./logic/registerUser")
const authenticateUser = require("./logic/authenticateUser")
const createPosts = require('./logic/createPosts')
const express = require('express')
// Importamos el paquete EXPRESS

const server = express()

server.get('/', (req, res) => res.send('Hello API.6'))
// Hacemos que la respuesta al servidor se envíe el 'Hello API.6'
// Ruta en 'localhost:8000/'

// TEST IN BROWSER 'GET' in localhost:8000/hello?name=Abel&surname=Prieto
server.get('/hello', (req, res) => res.send(`Hello, ${req.query.name} ${req.query.surname}!`))

const jsonBodyParser = express.json()
// Permite convertir cualquier petición con un cuerpo .JSON en un objeto en la propiedad 'body' de la request

// TEST in browser 'POST' in localhost:8000/register?name=Bruce+Wayne&email=nosoy@batman.com&password=1234
server.post('/register', jsonBodyParser, (req, res) => {
    try {
        const { name, email, password } = req.body
    
        registerUser(name, email, password, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
    
                return
            }
    
            res.status(201).send()
            // Envía código 200 de 'OKEY'
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

server.post('/login', jsonBodyParser, (req, res) => {
    try {
        const { email, password } = req.body

        authenticateUser(email, password, (error, userId) => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(200).send(userId)
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

server.post('/newpost', jsonBodyParser, (req, res) => {
    try {
        const { author, image, text } = req.body
        
        createPosts(author, image, text, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
            // Envía código 200 de 'OKEY'
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

server.listen(8000, () => console.log('server online'))
// Hacemos que el servidor se mantenga en escucha a través del puerto 8000 e imprima un console.log()