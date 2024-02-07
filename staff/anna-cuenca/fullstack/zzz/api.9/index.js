import dotenv from 'dotenv'
dotenv.config()
//esto carga variables de un entorno .env (lo que hicimos para elegir desde que puerto cargams el server)

// aqui montamos un server rápido
// const mongoose = require('mongoose')
// const express = require('express')

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
// el require funciona de la mimsa manera, si encuentras un index, traemelo



// const cors = require('./utils/cors')

import {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler,
    changeUserEmailHandler,
    changeUserPasswordHandler,
    editTextPostHandler,
    retrievePostsHandler,
    retrieveFavPostsHandler,
    deletePostHandler,
    retrieveUserPostsHandler
} from './handlers/index.js'



mongoose.connect(process.env.MONGODB_URL) //hagola conexión con moongose

    .then(() => {

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
        server.use(cors())







        //usar el metodo POST para hacer el registro
        server.post('/users', jsonBodyParser, registerUserHandler)

        //Authenticate User
        server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        // Retrieve User
        server.get('/users', retrieveUserHandler)


        // createPost
        server.post('/posts', jsonBodyParser, createPostHandler)

        // toggleLikePost

        server.patch('/posts/:postId/likes', jsonBodyParser, toggleLikePostHandler)

        // toggleFavPosts

        server.patch('/posts/:postId/favs', toggleFavPostHandler)

        // changeEmailUser

        server.patch('/users/change-email', jsonBodyParser, changeUserEmailHandler)

        // changePasswordUser

        server.patch('/users/change-password', jsonBodyParser, changeUserPasswordHandler)

        // edit text post

        server.patch('/posts/:postId/text', jsonBodyParser, editTextPostHandler)




        // Retrieve posts

        server.get('/posts', retrievePostsHandler)


        // Retrieve user posts

        server.get('/users/:userId/posts', retrieveUserPostsHandler)

        // Retrieve FAV posts

        server.get('/posts/favs', retrieveFavPostsHandler)


        // deletePost

        server.delete('/posts/:postId', deletePostHandler)

        //server.listen(process.env.PORT, () => console.log('server is up'))

        server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))

    })
    .catch(error => console.error(error))