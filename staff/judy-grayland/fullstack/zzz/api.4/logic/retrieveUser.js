const validate = require('./helpers/validate')

const { User } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function retrieveUser(userId, callback) {
  validate.id(userId, 'user id')
  validate.function(callback, 'callback')

  // ponemos 'name' para indicar que solo queremos el name del usuario. no necesitamos el resto de datos.
  User.findById(userId, 'name')
    .lean()
    .then((user) => {
      if (!user) {
        callback(new NotFoundError('user not found'))
        return
      }

      //tenemos que sanear:
      delete user._id
      callback(null, user)
    })
    .catch((error) => callback(new SystemError(error.message)))
}

module.exports = retrieveUser
