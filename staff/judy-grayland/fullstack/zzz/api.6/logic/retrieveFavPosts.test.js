import mongoose from 'mongoose'

import retrieveFavPosts from './retrieveFavPosts.js'

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    try {
      retrieveFavPosts('65b0f579f9beb466beb3a8e1', (error, posts) => {
        if (error) {
          console.error(error)

          return
        }
        console.log('fav posts retrieved', posts)
      })
    } catch (error) {
      console.log(error)
    }
  })
  .catch((error) => console.error(error))
