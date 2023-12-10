const registerUser = require('./registerUser')

try {
  registerUser('Gui Sante', 'gui@sante', '123123123', (error) => {
    if (error) {
      console.error(error)

      return
    }

    console.log('registered successfully')
  })
} catch (error) {
  console.log(error)
}
