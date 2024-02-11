require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const cors = require('./utils/cors')

const {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    retrievePostsHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler,
    changeUserEmailHandler,
    changeUserPasswordHandler,
    deletePostHandler,
    deleteUserHandler,
    retrieveFavPostsHandler,
    updatePostTextHandler
} = require('./handlers')

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        const server = express()

        const jsonBodyParser = express.json() //Te permite convertir cualquier petición que le enviemos al servidor con un cuerpo json lo convierte a objeto en la propiedad body de la request(req). Es un middleware.

        // Middleware para analizar cuerpos JSON
        server.use(express.json())

        server.use(cors)

        //REGISTER
        server.post('/users', jsonBodyParser, registerUserHandler)

        //LOGIN
        server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        //RETRIEVE USER
        server.get('/users', retrieveUserHandler)

        // RETRIEVE POSTS
        server.get('/posts', retrievePostsHandler)

        // RETRIEVE FAV POST
        server.get('/fav-posts', retrieveFavPostsHandler)

        //CREATE POST
        server.post('/posts', jsonBodyParser, createPostHandler)

        //TOGGLE LIKE POST
        server.patch('/posts/:postId/likes', toggleLikePostHandler)

        // TOGGLE FAV POST
        server.patch('/posts/:postId/favs', toggleFavPostHandler)

        // CHANGE EMAIL USER
        server.post('/users/email', jsonBodyParser, changeUserEmailHandler)

        // CHANGE PASSWORD USER
        server.post('/users/password', jsonBodyParser, changeUserPasswordHandler)

        // DELETE USER
        server.delete('/users/:userId', deleteUserHandler)

        // DELETE POST
        server.delete('/posts/:postId', deletePostHandler)

        //UPDATE POST TEXT
        server.put('/posts/:postId', jsonBodyParser, updatePostTextHandler)

        server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))
    })
    .catch(error => console.error(error))