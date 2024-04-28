import deleteUser from './deleteUser.js'

try {
  deleteUser('25v30oei1f5s', '123', (error, userId) => {
    if (error) {
      console.error(error)

      return
    }
    console.log('User deleted successfully', userId)
  })
} catch (error) {
  console.log(error)
}
