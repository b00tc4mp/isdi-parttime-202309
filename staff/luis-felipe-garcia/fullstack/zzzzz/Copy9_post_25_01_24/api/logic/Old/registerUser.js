import validate from './helpers/validate.js'
import { DuplicityError, SystemError } from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/errors.js'
import { User } from '../../../../../../api/data/models.js'


function registerUser(name, email, password) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.text(password, 'password')

    return User.create({ name, email, password })
        .catch(error => {
            if (error.code === 11000) {
                throw new DuplicityError('user already exists')

            }
            throw new SystemError(error.message)
        })
        .then(user => { })
}

export default registerUser