import mongoose from 'mongoose'

import createPost from './createPost.js'

// catch is there to handle errors that we did not anticipate and deal with in our function
// the callback error handler is there to deal with errors that we have contemplated.
mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    try {
      createPost(
        '65ae94b79032e56adfb60266',
        'https://cmon-files.s3.amazonaws.com/images/product_line/hero_mobo/72/2018-july-wackyraces-smallhero-v2.jpg',
        'Good morning, wacky races!',
        (error) => {
          if (error) {
            console.error(error)

            return
          }

          console.log('post created')
        }
      )
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
