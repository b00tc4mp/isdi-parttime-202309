import mongoose from 'mongoose'

import toggleLikePost from './toggleLikePost.js'

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    try {
      toggleLikePost(
        '65b0f579f9beb466beb3a8e1',
        '65b541279135d27445f27aa3',
        (error) => {
          if (error) {
            console.error(error)

            return
          }

          console.log('post like toggled')
        }
      )
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
