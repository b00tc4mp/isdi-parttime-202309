import dotenv from 'dotenv'

import mongoose from 'mongoose'

import retrieveFavPosts from './retrieveFavPosts.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      retrieveFavPosts('65b0f579f9beb466beb3a8e1')
        .then((posts) => console.log('fav posts retrieved', posts))
        .catch((error) => console.error(error))
    } catch (error) {
      console.log(error)
    }
  })
  .catch((error) => console.error(error))
