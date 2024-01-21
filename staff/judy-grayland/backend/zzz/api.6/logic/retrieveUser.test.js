const retrieveUser = require('./retrieveUser')

try {
  retrieveUser('3kmmn4f11xe0', (error, user) => {
    if (error) {
      console.error(error)

      return
    }
    console.log('user retrieved', user)
  })
} catch (error) {
  console.error(error)
}
