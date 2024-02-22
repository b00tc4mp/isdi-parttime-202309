const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')

function changeUserEmail(email, newEmail, newEmailConfirm, password, callback) {
  validateText(email, 'email')
  validateText(newEmail, 'new email')
  validateText(newEmailConfirm, 'new email confirm')
  validateText(password, 'password')
  validateFunction(callback, 'callback')

  JSON.parseFromFile('./data/users.json', (error, users) => {
    if (error) {
      callback(error)

      return
    }

    let user = users.find((user) => user.email === email)

    if (!user) {
      callback(new Error('user not found'))

      return
    }

    if (email !== user.email || password !== user.password) {
      callback(new Error('wrong credentials'))
    }

    if (newEmail !== newEmailConfirm) {
      callback(new Error('new email does not match confirmation'))
    }

    if (newEmail === email) {
      callback(new Error('the new email must not be the same as the old email'))
    }

    user.email = newEmail

    JSON.stringifyToFile('./data/users.json', users, (error) => {
      if (error) {
        callback(error)

        return
      }

      callback(null)
    })
  })
}

module.exports = changeUserEmail
