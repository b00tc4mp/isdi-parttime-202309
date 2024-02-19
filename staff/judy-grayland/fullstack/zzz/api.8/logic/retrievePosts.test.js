import dotenv from 'dotenv'
import mongoose from 'mongoose'

import retrievePosts from './retrievePosts.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      retrievePosts('65ca49e38e5eb0fe3f1065ad')
        .then((posts) => console.log('posts retrieved', posts))
        .catch((error) => console.error(error))
    } catch (error) {
      console.log(error)
    }
  })
  .catch((error) => console.log(error))
