import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import {
    registerUserHandler,
    authenticateUserHandler,
    createDogHandler,
    retrieveUsersHandler,
    retrieveDogsHandler,
    retrievePuppiesHandler,
    retrieveMalesHandler,
    retrieveFemalesHandler,
    deleteDogHandler,
    changeEmailHandler,
    changePasswordHandler,
    createHistoryHandler,
    retrieveHistoryHandler,
    // userContactHandler,

} from './handlers/index.js'

(async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL_PROYECT)

        const server = express()
        server.get('/', (req, res) => res.send('Hello, project!'))

        const jsonBodyParser = express.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, registerUserHandler)

        server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        server.patch('/users/email', jsonBodyParser, changeEmailHandler)

        server.patch('/users/password', jsonBodyParser, changePasswordHandler)

        server.post('/perfil', jsonBodyParser, createDogHandler)

        server.post('/history', jsonBodyParser, createHistoryHandler)

        server.get('/users', retrieveUsersHandler)

        server.get('/dogs', retrieveDogsHandler)

        server.get('/puppies', retrievePuppiesHandler)

        server.get('/males', retrieveMalesHandler)

        server.get('/females', retrieveFemalesHandler)

        server.get('/history-m', retrieveHistoryHandler)

        server.delete('/dogs/:dogId', deleteDogHandler)

        server.listen(process.env.PORT, () => console.log(`server is 🆗 on port ${process.env.PORT}!!`))
    } catch (error) {
        console.error(error)
    }
})()