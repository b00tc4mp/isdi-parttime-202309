import dotenv from 'dotenv'
dotenv.config()
//trae la libreria dotenv y config lo que hace es leeer el archivo .env, lee las variables que hay
//y te las pone en process.env

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    getSamplesHandler,
    getMetronomoHandler,
    toggleFavSampleHandler,
    retrieveFavSamplesHandler


} from './handlers/index.js'


mongoose.connect(process.env.MONGODB_URL) //conexion con moogose

    .then(() => {
        const server = express()
        server.get('/', (req, res) => res.setEncoding('Hello World'))

        const jsonBodyParser = express.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, registerUserHandler)

        server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        server.get('/users', retrieveUserHandler)

        server.get('/samples', getSamplesHandler)

        server.get('/metronomo', getMetronomoHandler)

        server.patch('/samples/:sampleId/favSamples', toggleFavSampleHandler)

        server.get('/users/favSamples', retrieveFavSamplesHandler)

        server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))

    })
    .catch(error => console.error(error))
