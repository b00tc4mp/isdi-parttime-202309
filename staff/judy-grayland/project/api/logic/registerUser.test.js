import dotenv from 'dotenv'
import mongoose from 'mongoose'
import registerUser from './registerUser.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      registerUser('Bingo School', 'bingo@school.com', '123456789')
        .then(() => {
          console.log('registered successfully')
        })
        .catch((error) => console.error(error))
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => {
    console.error(error)
  })
