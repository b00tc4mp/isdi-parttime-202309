import dotenv from 'dotenv' //importamos y configuramos primero dotenv, para que esten las variables de entorno.
dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import {
    registerUserHandler,
    deletePostHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    retrievePostsHandler,
    retrieveFavsPostHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler,
    togglePostCommentHandler,
    retrieveUserPostsHandler,
    updatePostTextHandler

} from './handlers/index.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        const server = express()

        server.get('/', (req, res) => res.send('Hello, World!'))

        const jsonBodyParser = express.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, registerUserHandler)

        server.post('/posts/:postId/delete', deletePostHandler)

        server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        server.get('/users', retrieveUserHandler)

        server.get('/users/:targetUserId/posts', retrieveUserPostsHandler)

        server.get('/posts', retrievePostsHandler)

        server.get('/posts/favs', retrieveFavsPostHandler)

        server.post('/posts', jsonBodyParser, createPostHandler)

        server.patch('/posts/:postId/likes', toggleLikePostHandler)

        server.patch('/posts/:postId/favs', toggleFavPostHandler)

        server.patch('/posts/:postId/comment', jsonBodyParser, togglePostCommentHandler)

        server.patch('/posts/:postId/text', jsonBodyParser, updatePostTextHandler)

        server.listen(process.env.PORT, () => console.log(`server is 🆗 on port ${process.env.PORT}!!`))
    })
    .catch(error => console.error(error))