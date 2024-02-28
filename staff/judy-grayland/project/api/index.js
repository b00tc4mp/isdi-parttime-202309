import dotenv from 'dotenv'
import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors' // the Cors package is a middleware for Express.js, that enables CORS in our API

import {
  authenticateUserHandler,
  registerUserHandler,
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

    // declaring endpoint for categories path
    // server.get('/categories', (req, res) => {
    //   Category.find()
    //     .then((categories) => {
    //       console.log(categories)
    //       res.json(categories)
    //     })
    //     .catch((error) => {
    //       console.log('Error retrieving data from MongoDB', error)
    //       res.status(500).json({ error: 'Internal server error' })
    //     })
    // })

    server.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  })
  .catch((error) => console.error('MongoDB connection error', error))
