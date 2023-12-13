const registerUser = require("./logic/registerUser")
const express = require('express')
// Importamos el paquete EXPRESS

const server = express()

server.get('/', (req, res) => res.send('Hello API.6'))
// Hacemos que la respuesta al servidor se envíe el 'Hello API.6'
// Ruta en 'localhost:8000/'

// TEST IN BROWSER 'GET' in localhost:8000/hello?name=Abel&surname=Prieto
server.get('/hello', (req, res) => res.send(`Hello, ${req.query.name} ${req.query.surname}!`))

// TEST in browser 'GET' in localhost:8000/register?name=Bruce+Wayne&email=nosoy@batman.com&password=1234
server.get('/register', (req, res) => {
    try {
        const { name, email, password } = req.query
    
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

server.listen(8000, () => console.log('server online'))
// Hacemos que el servidor se mantenga en escucha a través del puerto 8000 e imprima un console.log()