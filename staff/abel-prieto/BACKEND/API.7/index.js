const registerUser = require("./logic/registerUser")
const authenticateUser = require("./logic/authenticateUser")
const createPosts = require('./logic/createPosts')
const retrieveUser = require('./logic/retrieveUser')
const changeEmailUser = require('./logic/changeEmailUser')
const changePasswordUser = require('./logic/changePasswordUser')

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

// TEST in browser 'POST' in localhost:8000/users?name=Bruce+Wayne&email=nosoy@batman.com&password=1234
server.post('/users', jsonBodyParser, (req, res) => {
    try {
        const { name, email, password } = req.body
    
        registerUser(name, email, password, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
    
                return
            }
    
            res.status(201).send()
            // Envía código 201 de 'CREADO'
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

// TEST in browser 'POST' in localhost:8000/users/auth?email=nosoy@batman.com&password=1234
server.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { email, password } = req.body

        authenticateUser(email, password, (error, userId) => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(200).send(userId)
            // Envía código 200 de 'OKEY'

        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

server.get('/users', (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)
        // Recogemos en la cabecera el elemento solicitado en GET con el Authorization
        // Mediante el .substring() indicamos con número el carácter donde empieza el contenido/dato

        retrieveUser(userId, (error, user) => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(user)
            // Envía en formato json el usuario

        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

server.post('/users/email', jsonBodyParser, (req, res) => {
    try {
        const { email, newEmail, password } = req.body

        changeEmailUser(email, newEmail, password, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(200).send()
            // Envía código 200 de 'OKEY'

        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

server.post('/users/password', jsonBodyParser, (req, res) => {
    try {
        const { email, password, newPassword } = req.body

        changePasswordUser(email, password, newPassword, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(200).send()
            // Envía código 200 de 'OKEY'

        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

// TEST in browser 'POST' in localhost:8000/newpost?author=43htuuxgyl20&image="x"&text=hola
server.post('/newpost', jsonBodyParser, (req, res) => {
    try {
        const { author, image, text } = req.body
        
        createPosts(author, image, text, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
            // Envía código 201 de 'CREADO'
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

server.listen(8000, () => console.log('server online'))
// Hacemos que el servidor se mantenga en escucha a través del puerto 8000 e imprima un console.log()