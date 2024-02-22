import validate from './helpers/validate.js'

function changeUserPassword(
  email,
  password,
  newPassword,
  newPasswordConfirm,
  callback
) {
  validate.email(email)
  validate.password(password)
  validate.password(newPassword, 'new password')
  validate.password(newPasswordConfirm, 'new password confirm')
  validate.function(callback, 'callback')

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

export default changeUserPassword
