import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {
    authenticateUserHandler,
    registerUserHandler,
    retrieveUserHandler
} from './handlers/index.js'

dotenv.config()

mongoose.connect(process.env.URL_MONGODB_HIINIT_API)
    .then(() => {
        const server = express()
        const jsonBodyParser = express.json()

        server.use(cors())

        // ALL API REQUEST
        server.get('/hello', (req, res) => res.send('Hello HIINIT API v0.0'))

        // REGISTER USER
        server.post('/users', jsonBodyParser, registerUserHandler)

        // AUTHENTICATE USER
        server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        // RETRIEVE USER
        server.get('/users', retrieveUserHandler)

        server.listen(process.env.PORT, () => console.log(`server online! Listen on: ${process.env.PORT}`))
    })
    .catch(error => console.error(error))
