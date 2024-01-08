// aqui montamos un server rápido

const express = require('express')

const registerUser = require('./logic/registerUser') // el requiere es como el input
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const toggleLikePost = require('./logic/toogleLikePost')
const { SystemError, NotFoundError, ContentError, DuplicityError, AuthenticateError } = require('./utils/errors')

const server = express()

// server escucha una petición get, en la ruta por defecto y en esta ruta recibiremos una peticion(req) y
// un objeto para responder (res)
// si nos piden esta ruta enviamos un mensaje de Hello world, que por defecto será contenido en html
server.get('/', (req, res) => res.send('Hello world'))
// abrimos el puerto 8000 y enviamos un chivato para que nos avise de que ha arrancado

//ahora vamos a montar una ruta, la / es la ruta raíz, vamos a hacer como páginas
// server.get('/hello', (req, res) => res.send('Hello its me'))

//ahora lo que queremos es enviarle nuestro nombre (seria un Query string) y que se muestre en la pagina
// esto se hace con la req, todos los parámetros que enviemos aqui, se pueden recoger
// esto seria hacer un TEST in browser GET localhost:8000/hello?name=Anna&surname=Cuenca
server.get('/hello', (req, res) => res.send(`Hello its, ${req.query.name} ${req.query.surname}`))
// pero para que te salga, en el navegador tienes que darle esos parámetros de esta manera:
//localhost:8000/hello?name=Anna&surname=Cuenca
// esto seria hacer un TEST in browser GET localhost:8000/register?name=Anna+Cuenca&email=a@cuenca.com&password=123
//server.get('/register', (req, res) => res.send(`Hello its, ${req.query.name} ${req.query.email} ${req.query.password}`))

// esto es un parseador, lo necesitamos para que en el body, nos aparezca la información en forma de objeto
// y nos lo pone como propiedad e la req.body
const jsonBodyParser = express.json()

// essto es un middlewhere que se va a ejecutar antes que cualquier petición
//aqui añaddimos las cabeceras que permiten al cliente (al navegador), los accesos desde cualquier servidor
server.use((req, res, next) => {

    // en la respuesta se ponen los headers que tocan
    // le decimos al cliente que nos puede llamar desde cualquier origen.
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')

    next() // con esto, le decimos que primero pasará por el res.setHeader, luego sigue su camino

})

//usar el metodo POST para hacer el registro
server.post('/users', jsonBodyParser, (req, res) => {
    const { name, email, password } = req.body //queremos que nos devuelva la respuesta en el body

    try {
        registerUser(name, email, password, error => {
            if (error) {
                // no hacemos un callback(error), le indicamos al navegador el tipo de error en forma de respuesta (res)
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof DuplicityError)
                    status = 409

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send() //todo ha ido bien, se lo indicamos al navegador
        })

    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

//Authenticate User

server.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { email, password } = req.body

        authenticateUser(email, password, (error, userId) => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404
                else if (error instanceof AuthenticateError)
                    status = 401

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(userId)
        })
    } catch (error) {
        let status = 400

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// Retrieve User

server.get('/users', (req, res) => { //no hay un jsonBodyParser porque no enviamos nada en el body, enviamos una cabecera con el id
    try {
        const userId = req.headers.authorization.substring(7)

        retrieveUser(userId, (error, user) => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(user)
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

// createPost

server.post('/posts', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { image, text } = req.body

        createPost(userId, image, text, error => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// toggleLikePost

server.patch('/posts/:postId/likes', (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { postId } = req.params

        toggleLikePost(userId, postId, error => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(204).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

server.listen(8000, () => console.log('server is up'))