const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const toggleLikePost = require('./logic/toggleLikePost')
const retrievePosts = require('./logic/retrievePosts')

const { SystemError, ContentError, DuplicityError, NotFoundError } = require('./utils/errors')

const server = express()

// const cors = require('cors');
// app.use(cors());

server.get('/', (req, res) => res.send('Hello, World!!')) //Lo que manejamos entre la petición y la respuesta se llama "middleware"
////////////////////////////////////////////////////////////////////////////////////////////////

const jsonBodyParser = express.json()

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')

    next()
})

server.post('/users', jsonBodyParser, (req, res) => {
    try {
        const { name, email, password } = req.body

        registerUser(name, email, password, error => {
            if (error) {
                let status = 400

                if (error instanceof SystemError) {
                    status = 500
                }
                else if (error instanceof DuplicityError) {
                    status = 409
                }

                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError) {
            status = 406
        }
        res.status(status).json({ error: error.constructor.name, message: error.message })
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

server.patch('./posts/:postId/likes', (rep, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { postId } = req.params

        toggleLikePost(userId, postId, error => {
            if (error) {
                let status = 400
                if (error instanceof SystemError) {
                    status = 500
                }
                else if (error instanceof NotFoundError) {
                    status = 404
                }

                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(204).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError) {
            status = 406
        }
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

server.get('/posts', (req, res) => {//manejar errores como en togglelike post.
    try {
        const userId = req.headers.authorization.substring(7)

        retrievePosts(userId, (error, posts) => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }
            res.json(posts)
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})


server.listen(8000, () => console.log('server is up ⭐!!'))