import { validate, errors } from 'com'

import { User } from '../data/models.js'
const { NotFoundError, SystemError } = errors

function retrieveUser(userId) {
  validate.id(userId, 'user id')

  // ponemos 'name' para indicar que solo queremos el name del usuario. no necesitamos el resto de datos.
  return User.findById(userId, 'name')
    .lean()
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((user) => {
      if (!user) throw new NotFoundError('user not found')

      delete user._id
      return user
    })
}

export default retrieveUser
