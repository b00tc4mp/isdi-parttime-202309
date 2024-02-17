import dotenv from 'dotenv'
dotenv.config()
// trae la librería dotenv y config lo que hace es leer el archivo .env, lee las variables que hay
// y te las pone en process.env

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'


import {
    registerUserHandler
} from './handlers/index.js'

mongoose.connect(process.env.MONGODB_URL) //hagola conexión con moongose

    .then(() => {
        const server = express()
        server.get('/', (req, res) => res.send('Hello world'))

        const jsonBodyParser = express.json()

        server.use(cors())







        //usar el metodo POST para hacer el registro
        server.post('/users', jsonBodyParser, registerUserHandler)

        //server.post('/arduino/move', jsonBodyParser, arduinoMoveHandler)

        server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))

    })
    .catch(error => console.error(error))