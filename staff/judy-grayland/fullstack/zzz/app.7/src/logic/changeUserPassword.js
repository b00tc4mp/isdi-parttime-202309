import validate from './helpers/validate'
import context from './context'

function changeUserPassword(password, newPassword, newPasswordConfirm) {
  validate.password(password)
  validate.password(newPassword, 'new password')
  validate.password(newPasswordConfirm, 'new password confirm')

  // TODO call API

  // db.users.findById(context.sessionUserId, (error, user) => {
  //   if (error) {
  //     callback(error)

  //     return
  //   }

  //   if (!user || user.password !== password) {
  //     callback(new Error('wrong credentials'))

  //     return
  //   }

  //   if (!newPassword !== newPasswordConfirm) {
  //     callback(new Error('new password and its confirmation do not match'))

  //     return
  //   }

  //   user.password = newPassword

  //   db.users.update(user, (error) => {
  //     if (error) {
  //       callback(error)

  //       return
  //     }

  //     callback(null)
  //   })
  // })
}

export default changeUserPassword
