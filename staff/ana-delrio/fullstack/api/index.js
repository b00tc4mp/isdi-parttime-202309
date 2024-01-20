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
    retrieveFavPostsHandler
} = require('./handlers')


mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        // se crea una instancia de express, para manejar la solicitudes GET
        // devolviendo el mensaje: "hello world"
        const server = express()
        server.get('/', (req, res) => res.send('Hello, World!'))

        // es un middelware: te permite convertir cualquier peticion que le enviemos al servidor con un cuerpo json, lo convierte a objeto, en la propiedad body de la request
        const jsonBodyParser = express.json()

        //middleware: configuramos los encabezados CORS para poder acceder desde cualquier origen (*)
        server.use(cors)

        // manejamos la solicitud de login con la ruta /users
        server.post('/users', jsonBodyParser, registerUserHandler)

        server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        server.get('/users', retrieveUserHandler)

        server.get('/posts', retrievePostsHandler)

        server.post('/posts', jsonBodyParser, createPostHandler)

        // PATCH: actualizaciones parciales en recursos 
        // la ruta espera un parámetro postId que identifica la publicación a la que se refiere la acción
        // La palabra "likes" hace referencias a que esta ruta está diseñada para manejar operaciones relacionadas con la gestión de "likes"
        server.patch('/posts/:postId/likes', toggleLikePostHandler)

        server.patch('/posts/:postId/favs', toggleFavPostHandler)

        server.get('/posts/favs', retrieveFavPostsHandler)


        server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))

    })
    .catch(error => console.error(error))