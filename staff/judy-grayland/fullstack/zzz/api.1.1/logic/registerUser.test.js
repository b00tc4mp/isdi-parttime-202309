const registerUser = require('./registerUser')

try {
  registerUser('Chi Rivia', 'chi@rivia.com', '123123123', (error) => {
    if (error) {
      console.error(error)

      return
    }

    console.log('registered successfully')
  })
} catch (error) {
  console.error(error)
}
