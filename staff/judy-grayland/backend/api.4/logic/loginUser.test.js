const loginUser = require('./loginUser')

try {
  loginUser('gui@sante', '123123123', (error, userId) => {
    if (error) {
      console.error(error)

      return
    }

    console.log('logged in successfully', userId)
  })
} catch (error) {
  console.log(error)
}
