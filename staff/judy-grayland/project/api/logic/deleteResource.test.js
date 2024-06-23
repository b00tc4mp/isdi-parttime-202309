import dotenv from 'dotenv'
import mongoose from 'mongoose'
import deleteResource from './deleteResource.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      deleteResource('66423a01454d6ad82fe53006')
        .then(() => {
          console.log('resource deleted successfully')
        })
        .catch((error) => console.error(error))
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => {
    console.error(error)
  })
