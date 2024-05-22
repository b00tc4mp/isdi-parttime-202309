import dotenv from 'dotenv'
import mongoose from 'mongoose'
import editResource from './editResource.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      editResource('6645f479c04e170db038d1bc', {
        title: 'Libro 4000',
        description: 'Libro 2000',
      })
        .then(() => {
          console.log('resource edited successfully')
        })
        .catch((error) => console.error(error))
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => {
    console.error(error)
  })
