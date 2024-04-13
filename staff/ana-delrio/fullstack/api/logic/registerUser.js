import bcrypt from 'bcryptjs'

import { validate, errors } from 'com'

import { User } from '../data/models.js'

const { SystemError, DuplicityError } = errors

function registerUser(name, email, password) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.text(password, 'password')

    return (async () => {
        let hash

        try {
            hash = await bcrypt.hash(password, 8)
        } catch (error) {
            throw new SystemError(error.message)
        }

        try {
            await User.create({ name, email, password: hash })
        } catch (error) {
            // If the error code is 11000, it is interpreted as a duplicity error.
            // error code 11000 in MongoDB is a specific code indicating a single index violation.
            if (error.code === 11000)
                throw new DuplicityError('user already exists')

            throw new SystemError(error.message)
        }
    })()
}

export default registerUser