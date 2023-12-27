const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const toggleLikePost = require('./logic/toggleLikePost')
const toggleFavPost = require('./logic/toggleFavPost')
const retrievePosts = require('./logic/retrievePosts')
const { SystemError, NotFoundError, ContentError, DuplicityError, CredentialsError } = require('./utils/errors')
const changeUserEmail = require('./logic/changeUserEmail')
const changeUserPassword = require('./logic/changeUserPassword')

const server = express()
server.get('/', (req, res) => res.send('Hello World'))
//server.get('/hello', (req,res) => res.send('Hello !!!'))

//Test in browser GET http://localhost:8000/hello?name=Luis&surname=Garc%C3%ADa
server.get('/hello', (req, res) => res.send(`<h1>Hello, ${req.query.name} ${req.query.surname} !!!</h1>`))

//TEST in browser POST http://localhost:8000/register?name=Pepito+Grillo&email=pepito@grillo.com&paswword=123123123

const jasonBodyParser = express.json()

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')

    next()
})

server.post('/users', jasonBodyParser, (req, res) => {
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

server.post('/users/auth', jasonBodyParser, (req, res) => {
    try {
        const { email, password } = req.body

        authenticateUser(email, password, (error, userId) => {

            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
                return
            }
            res.json(`${userId}`)

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
                res.status(400).json({ error: error.constructor.name, message: error.message })
                return
            }

            res.json(user)
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })

    }
})

server.get('/posts', (req, res) => {
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

server.post('/posts', jasonBodyParser, (req, res) => {
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

server.patch('/users/:userId/favs', jasonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)
        const { postId } = req.body

        toggleFavPost(userId, postId, error => {
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

server.patch('/users/change-email', jasonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)
        const { newEmail, newEmailConfirm, password } = req.body

        changeUserEmail(userId, newEmail, newEmailConfirm, password, error => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404
                else if (error instanceof CredentialsError)
                    status = 401

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

server.patch('/users/change-password', jasonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)
        const { newPassword, newPasswordConfirm, password } = req.body

        changeUserPassword(userId, newPassword, newPasswordConfirm, password, error => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404
                else if (error instanceof CredentialsError)
                    status = 401

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