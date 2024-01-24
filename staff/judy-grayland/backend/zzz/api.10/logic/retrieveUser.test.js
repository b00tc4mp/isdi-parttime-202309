const mongoose = require('mongoose')

const retrieveUser = require('./retrieveUser')

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    try {
      retrieveUser('65ae005b12a57f55da9799f0', (error, user) => {
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
