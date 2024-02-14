import mongoose from 'mongoose'

import toggleFavPost from './toggleFavPost.js'

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    try {
      toggleFavPost(
        '65b0f579f9beb466beb3a8e1',
        '65b541279135d27445f27aa3',
        (error) => {
          if (error) {
            console.error(error)

            return
          }

          console.log('post fav toggled')
        }
      )
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
