import dotenv from 'dotenv'
import mongoose from 'mongoose'

import retrieveUser from './retrieveUser.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      retrieveUser('65c79824027724564b75b7e6')
        .then((user) => console.log('user retrieved', user))
        .catch((error) => console.error(error))
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
