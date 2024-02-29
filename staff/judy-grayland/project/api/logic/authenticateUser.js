import bcrypt from 'bcryptjs'
import validate from '../../shared/validate.js'
import errors from '../../shared/errors.js'
const { NotFoundError, CredentialsError, SystemError } = errors

import { User } from '../data/models.js'
import { expect } from 'chai'

function authenticateUser(email, password) {
  validate.email(email, 'email')
  validate.password(password, 'password')

  return User.findOne({ email })
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((user) => {
      if (!user) throw new NotFoundError('user not found')
      /* 
      in order to work with the encrypted password, we replace our old code: 
      if (user.password !== password)
      throw new CredentialsError('wrong password')
      */
      return bcrypt
        .compare(password, user.password)
        .catch((error) => {
          new SystemError(error.message)
        })
        .then((match) => {
          if (!match) {
            throw new CredentialsError('wrong password')
          }
          return user.id
        })
    })
}

export default authenticateUser
