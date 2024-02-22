import { User } from '../data/models.js'
import bcrypt from 'bcrypt'
import { errors } from 'com'
const { SystemError, DuplicityError } = errors

function registerUser(username, email, password) {

    return bcrypt.hash(password, 5)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return User.create({ username, email, password: hash })
                .catch(error => {
                    if (error.code === 11000) {
                        throw new DuplicityError('Account already exist. Try again')
                    }

                    throw new SystemError(error.message)
                })
                .then(user => { })
        })
}

export default registerUser