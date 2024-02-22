import dotenv from 'dotenv'
import mongoose from 'mongoose'

import createPost from './createPost.js'
import { User } from '../data/models.js'
dotenv.config()

// catch is there to handle errors that we did not anticipate and deal with in our function
// the callback error handler is there to deal with errors that we have contemplated.
mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => User.deleteMany())
  .then(() =>
    User.create({
      name: 'Lima Limon',
      email: 'lima@limon.com',
      password: 'aaa',
    })
  )
  .then((user) => {
    try {
      createPost(
        user.id,
        'https://cmon-files.s3.amazonaws.com/images/product_line/hero_mobo/72/2018-july-wackyraces-smallhero-v2.jpg',
        'Good morning, wacky races!'
      )
        .then(() => {
          console.log('post created')
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
