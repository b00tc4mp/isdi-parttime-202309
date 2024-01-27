require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const cors = require('./utils/cors')

const {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    retrievePostsHandler,
    retrieveFavsPostHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler
} = require('./handlers')

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        const server = express()

        server.get('/', (req, res) => res.send('Hello, World!'))

        const jsonBodyParser = express.json()

        server.use(cors)

        server.post('/users', jsonBodyParser, registerUserHandler)

        server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        server.get('/users', retrieveUserHandler)

        server.get('/posts', retrievePostsHandler)

        server.get('/posts/favs', retrieveFavsPostHandler)

        server.post('/posts', jsonBodyParser, createPostHandler)

        server.patch('/posts/:postId/likes', toggleLikePostHandler)

        server.patch('/posts/:postId/favs', toggleFavPostHandler)

        server.listen(process.env.PORT, () => console.log('server is 🆗!!'))
    })
    .catch(error => console.error(error))