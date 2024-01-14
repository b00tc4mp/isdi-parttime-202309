const changeUserEmail = require('./changeUserEmail')

try {
  changeUserEmail('lechu@guita', 'ru@cula', 'ru@cula', '123123123', (error) => {
    if (error) {
      console.error(error)

      return
    }

    console.log('email changed successfully')
  })
} catch (error) {
  console.log(error)
}
