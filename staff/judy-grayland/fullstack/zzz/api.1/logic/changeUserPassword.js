const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')

function changeUserPassword(
  email,
  password,
  newPassword,
  newPasswordConfirm,
  callback
) {
  validateText(email, 'email')
  validateText(password, 'password')
  validateText(newPassword, 'new password')
  validateText(newPasswordConfirm, 'new password confirm')
  validateFunction(callback, 'callback')

  JSON.parseFromFile('./data/users.json', (error, users) => {
    if (error) {
      callback(error)

      return
    }
    const user = users.find((user) => user.email === email)

    if (!user) {
      callback(new Error('user not found'))

      return
    }

    if (password !== user.password) {
      callback(new Error('wrong credentials'))

      return
    }

    if (newPassword !== newPasswordConfirm) {
      callback(new Error('new password and confirmation do not match'))
    }

    if (password === newPassword) {
      callback(new Error('new password must be differente from old password'))
    }

    user.password = newPassword

    JSON.stringifyToFile('./data/users.json', users, (error) => {
      if (error) {
        callback(error)

        return
      }

      callback(null)
    })
  })
}

module.exports = changeUserPassword
