import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authenticateUser from './authenticateUser.js'

dotenv.config()

mongoose.connect(process.env.MONGODB_URL_TEST).then(() => {
  try {
    authenticateUser('bingo@school.com', '123456789')
      .then((userId) => {
        console.log('user logged in successfully', userId)
      })
      .catch((error) => console.error(error))
  } catch (error) {
    console.error(error)
  }
})
