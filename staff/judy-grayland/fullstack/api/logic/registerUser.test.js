import dotenv from 'dotenv'
import mongoose from 'mongoose'

import registerUser from './registerUser.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      registerUser('Pa Paya', 'pa@paya.com', '123123123')
        // no devuelve nada si va por el happy path por eso no hay ningún parametro en el then
        .then(() => {
          console.log('registered successfully')
        })
        .catch((error) => console.error(error))
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
