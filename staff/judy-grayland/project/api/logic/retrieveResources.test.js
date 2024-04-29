import dotenv from 'dotenv'
import mongoose from 'mongoose'
import retrieveResources from './retrieveResources.js'

dotenv.config()

mongoose.connect(process.env.MONGODB_URL_TEST).then(() => {
  try {
    retrieveResources()
      .then(() => {
        console.log('resources retrieved correctly')
      })
      .catch((error) => console.error(error))
  } catch (error) {
    console.error(error)
  }
})
