import dotenv from 'dotenv'
import mongoose from 'mongoose'

import toggleLikePost from './toggleLikePost.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      toggleLikePost('65b0f579f9beb466beb3a8e1', '65b541279135d27445f27aa3')
        .then(() => console.log('post like toggled'))
        .catch((error) => {
          console.error(error)
        })
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
