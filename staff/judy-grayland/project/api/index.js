import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      res.send('Hello World!')
    })
    server.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  })
  .catch((error) => console.error('MongoDB connection error', error))
