import dotenv from 'dotenv'

import mongoose from 'mongoose'

import authenticateUser from './authenticateUser.js'
dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      authenticateUser('agua@cate.com', 'aaa')
        .then((userId) => {
          console.log('user authenticated', userId)
        })
        .catch((error) => console.log(error))
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
