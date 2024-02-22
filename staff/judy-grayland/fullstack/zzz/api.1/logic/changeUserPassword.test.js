const changeUserPassword = require('./changeUserPassword')

try {
  changeUserPassword('cala@bacin', '123123123', '123', '123', (error) => {
    if (error) {
      console.error(error)

      return
    }
    console.log('password changed successfully')
  })
} catch (error) {
  console.log(error)
}
