const mongoose = require('mongoose')

const retrievePosts = require('./retrievePosts')

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    try {
      retrievePosts('65b0f34bf9beb466beb3a8df', (error, posts) => {
        if (error) {
          console.error(error)

          return
        }
        console.log('posts retrieved', posts)
      })
    } catch (error) {
      console.log(error)
    }
  })
  .catch((error) => console.error(error))
