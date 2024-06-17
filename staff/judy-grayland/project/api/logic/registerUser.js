import bcrypt from 'bcryptjs'
import { validate, errors } from 'shared'
const { DuplicityError, SystemError } = errors

import { User } from '../data/models.js'

function registerUser(name, email, password) {
  validate.text(name, 'name')
  validate.email(email, 'email')
  validate.password(password, 'password')

  // in the brackets after password we had a number that represents the salt we're adding (bcrypt is for encrypting passwords)
  return bcrypt
    .hash(password, 8)
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((hash) => {
      return User.find()
        .catch((error) => {
          throw new SystemError(error.message)
        })
        .then((users) => {
          const role = users.length === 0 ? 'admin' : 'user'
          return User.create({ name, email, password: hash, role })
            .catch((error) => {
              if (error.code === 11000) {
                throw new DuplicityError('user already exists')
              }
              throw new SystemError(error.message)
            })
            .then((user) => {})
        })
    })
}

export default registerUser
