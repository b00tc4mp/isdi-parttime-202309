import dotenv from 'dotenv'
import mongoose from 'mongoose'

import toggleFavPost from './toggleFavPost.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      toggleFavPost('65cb6d7cd8199f7f661f78b5', '65cb6d97df37b539cb056c8f')
        .then(() => {
          console.log('post fav toggled')
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
