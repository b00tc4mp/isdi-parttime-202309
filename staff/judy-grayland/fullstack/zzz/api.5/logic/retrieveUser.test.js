import mongoose from 'mongoose'

import retrieveUser from './retrieveUser.js'

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    try {
      retrieveUser('65b0f34bf9beb466beb3a8df', (error, user) => {
        if (error) {
          console.error(error)

          return
        }
        console.log('user retrieved', user)
      })
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
