import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    createProductHandler
} from './handlers/index.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        const server = express()

        const jsonBodyParser = express.json() //Te permite convertir cualquier petición que le enviemos al servidor con un cuerpo json lo convierte a objeto en la propiedad body de la request(req). Es un middleware. Analiza el cuerpo de las solicitudes entrantes en formato JSON, facilitando el acceso a estos datos.

        server.use(cors())

        //REGISTER
        server.post('/users', jsonBodyParser, registerUserHandler)

        //LOGIN
        server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        //RETRIEVE USER
        server.get('/users', retrieveUserHandler)

        //CREATE PRODUCT
        server.post('/products', jsonBodyParser, createProductHandler)

        server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))
    })
    .catch(error => console.error(error))