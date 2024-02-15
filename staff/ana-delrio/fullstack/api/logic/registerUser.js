import bcrypt from 'bcryptjs'

import { validate, errors } from 'com'

const { SystemError, NotFoundError, CredentialsError, DuplicityError } = errors

import { User } from '../data/models.js'

function registerUser(name, email, password) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.text(password, 'password')


    return bcrypt.hash(password, 8)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash =>
            User.create({ name, email, password: hash })
                .catch(error => {
                    // If the error code is 11000, it is interpreted as a duplicity error.
                    // error code 11000 in MongoDB is a specific code indicating a single index violation.
                    if (error.code === 11000)
                        throw new DuplicityError('user already exists')

                    throw new SystemError(error.message)
                })
                .then(user => { })
        )
}

export default registerUser