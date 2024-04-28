import { validate, errors } from 'com'

import { User } from '../data/models.js'
const { DuplicityError, SystemError } = errors

function registerUser(name, email, password) {
  validate.text(name, 'name')
  validate.email(email, 'email')
  validate.text(password, 'password')

  return (
    User.create({ name, email, password })
      .catch((error) => {
        if (error.code === 11000) {
          throw new DuplicityError('user already exists')
        }
        throw new SystemError(error.message)
      })
      // como antes devolvíamos null para el callback ahora no devolvemos nada. El parámetro user lo ponemos simplemente para que visualmente se entienda mejor, pero se podría poner igual: .then(() => {}) No se podría poner .then() a secas. Si no ponemos nada, es decir {}, retorna undefined que es lo queremos
      .then((user) => {})
  )
}

export default registerUser
