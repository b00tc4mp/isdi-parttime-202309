const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const toggleLikePost = require('./logic/toggleLikePost')
const { SystemError, NotFoundError, ContentError, DuplicityError } = require('./utils/errors')

const server = express()

const jsonBodyParser = express.json() //Te permite convertir cualquier petición que le enviemos al servidor con un cuerpo json lo convierte a objeto en la propiedad body de la request(req). Es un middleware.


//REGISTER
server.post('/users', jsonBodyParser, (req, res) => {
    try {
        const { name, email, password } = req.body

        registerUser(name, email, password, error => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof DuplicityError)
                    status = 409

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

//LOGIN
server.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { email, password } = req.body

        authenticateUser(email, password, (error, userId) => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof DuplicityError)
                    status = 409
                else if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(userId)
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

//RETRIEVE USER
server.get('/users', (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)// El ID está a partir del carácter 7 del cabecero "-H 'Authorization: Bearer 5gbocg2tsfs0'"

        retrieveUser(userId, (error, user) => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError)
                    status = 404 // Usuario no encontrado
                else if (error instanceof ContentError)
                    status = 406 // Contenido no aceptable

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(user)
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

//CREATE POST
server.post('/posts', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { image, text } = req.body

        createPost(userId, image, text, error => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError)
                    status = 404
                else if (error instanceof ContentError)
                    status = 406

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

//TOGGLE LIKE POST
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