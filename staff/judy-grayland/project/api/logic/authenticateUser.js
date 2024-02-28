import validate from '../../shared/validate.js'
import errors from '../../shared/errors.js'

const { NotFoundError, CredentialsError, SystemError } = errors

import { User } from '../data/models.js'

function authenticateUser(email, password) {
  validate.email(email, 'email')
  validate.password(password, 'password')

  return User.findOne({ email })
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((user) => {
      if (!user) throw new NotFoundError('user not found')

      if (user.password !== password)
        throw new CredentialsError('wrong password')
      return user.id
    })
}

export default authenticateUser
