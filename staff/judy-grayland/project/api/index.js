import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { Category } from './data/models.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    const server = express()

    // declaring endpoint for the root path. We tell it what it should do when a request of type get is made to this path: should send the response Hello World! (to the browser, to the terminal with curl, to our app with fetch)
    server.get('/', (req, res) => {
      res.send('Hello World!')
    })

    // declaring endpoint for categories path
    server.get('/categories', (req, res) => {
      Category.find()
        .then((categories) => {
          console.log(categories)
          res.json(categories)
        })
        .catch((error) => {
          console.log('Error retrieving data from MongoDB', error)
          res.status(500).json({ error: 'Internal server error' })
        })
    })

    server.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  })
  .catch((error) => console.error('MongoDB connection error', error))
