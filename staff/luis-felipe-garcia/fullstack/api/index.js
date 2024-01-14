require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const logic = require('./logic/index')
const cors = require('./utils/cors')


const { SystemError, NotFoundError, ContentError, DuplicityError, CredentialsError } = require('./logic/errors')

const {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    retrievePostsHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler,
    retrieveFavPostsHandler
} = require('./handlers')

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        const server = express()
        server.get('/', (req, res) => res.send('Hello World'))
        //server.get('/hello', (req,res) => res.send('Hello !!!'))

        //Test in browser GET http://localhost:8000/hello?name=Luis&surname=Garc%C3%ADa
        server.get('/hello', (req, res) => res.send(`<h1>Hello, ${req.query.name} ${req.query.surname} !!!</h1>`))

        //TEST in browser POST http://localhost:8000/register?name=Pepito+Grillo&email=pepito@grillo.com&paswword=123123123

        const jasonBodyParser = express.json()

        server.use(cors)

        server.post('/users', jasonBodyParser, registerUserHandler)

        server.post('/users/auth', jasonBodyParser, authenticateUserHandler)

        server.get('/users', retrieveUserHandler)

        server.get('/posts', retrievePostsHandler)

        server.post('/posts', jasonBodyParser, createPostHandler)

        server.patch('/posts/:postId/likes', toggleLikePostHandler)

        server.patch('/posts/:postId/favs', toggleFavPostHandler)

        server.get('/posts/favs', retrieveFavPostsHandler)

        server.listen(process.env.PORT, () => console.log(`server is up running on port ${process.env.PORT}`))

    })
    .catch(error => console.error(error))