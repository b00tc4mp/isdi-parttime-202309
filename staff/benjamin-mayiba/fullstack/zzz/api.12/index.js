import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'


import {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    retrievePostsHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler,
    retrieveFavPostsHandler,
    changeUserEmailHandler,
    changeUserPasswordHandler,
    commentPostHandler,
    retrieveUserPostsHandler
} from './handlers/index.js'

mongoose.connect(process.env.TEST_MONGODB_URL )
    .then(() => {
        const server = express()

        server.get('/', (req, res) => res.send('Hello, World!'))

        const jsonBodyParser = express.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, registerUserHandler)

        server.post('/users/auth', jsonBodyParser, authenticateUserHandler)
        server.post('/users/change-email', jsonBodyParser,changeUserEmailHandler)
        server.post('/users/change-password', jsonBodyParser, changeUserPasswordHandler)


        server.get('/users', retrieveUserHandler)

        server.get('/posts', retrievePostsHandler)

        server.get('/users/posts', retrieveUserPostsHandler)

        server.post('/posts', jsonBodyParser, createPostHandler)

        server.patch('/posts/:postId/likes', toggleLikePostHandler)
    
        server.patch('/posts/:postId/favs', toggleFavPostHandler)

        server.get('/posts/favs', retrieveFavPostsHandler)

        server.post('/posts/:postId/comments', jsonBodyParser, commentPostHandler)
        

        server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))
    })
    .catch(error => console.error(error))