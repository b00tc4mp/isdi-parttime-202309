import dotenv from 'dotenv'
import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors' // the Cors package is a middleware for Express.js, that enables CORS in our API

import {
  registerUserHandler,
  authenticateUserHandler,
  createResourceHandler,
  retrieveResourcesHandler,
  deleteResourceHandler,
  editResourceHandler,
} from './handlers/index.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    const server = express()

    // declaring endpoint for the root path. We tell it what it should do when a request of type get is made to this path: it should send the response Hello World! (to the browser, to the terminal with curl, to our app with fetch)
    server.get('/', (req, res) => {
      res.send('Hello World!')
    })

    const jsonBodyParser = express.json()

    server.use(cors())

    server.post('/users', jsonBodyParser, registerUserHandler)

    server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

    server.post('/resources', jsonBodyParser, createResourceHandler)

    server.get('/resources', retrieveResourcesHandler)

    // the :id is dynamic. we pass the id as params to specify which resource needs to be deleted
    server.delete('/resources/:id', deleteResourceHandler)

    server.patch('/resources/:id', jsonBodyParser, editResourceHandler)

    server.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  })
  .catch((error) => console.error('MongoDB connection error', error))
