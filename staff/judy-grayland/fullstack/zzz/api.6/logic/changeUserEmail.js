import validate from './helpers/validate.js'

function changeUserEmail(email, newEmail, newEmailConfirm, password, callback) {
  validate.text(email, 'email')
  validate.text(newEmail, 'new email')
  validate.text(newEmailConfirm, 'new email confirm')
  validate.text(password, 'password')
  validate.function(callback, 'callback')

  //   JSON.parseFromFile('./data/users.json', (error, users) => {
  //   if (error) {
  //     callback(error)

  //     return
  //   }

  //   let user = users.find((user) => user.email === email)

  //   if (!user) {
  //     callback(new Error('user not found'))

  //     return
  //   }

  //   if (email !== user.email || password !== user.password) {
  //     callback(new Error('wrong credentials'))
  //   }

  //   if (newEmail !== newEmailConfirm) {
  //     callback(new Error('new email does not match confirmation'))
  //   }

  //   if (newEmail === email) {
  //     callback(new Error('the new email must not be the same as the old email'))
  //   }

  //   user.email = newEmail

  //   JSON.stringifyToFile('./data/users.json', users, (error) => {
  //     if (error) {
  //       callback(error)

  //       return
  //     }

  //     callback(null)
  //   })
  // })
}

export default changeUserEmail
