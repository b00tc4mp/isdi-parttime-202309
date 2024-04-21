import bcrypt from 'bcryptjs'

import { User } from '../data/models.js'
import { validate, errors } from 'com'
const { SystemError, DuplicityError } = errors

function registerUser(name, email, password) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.password(password, 'password')
    validate.text(password, 'password')

    return (async () => {

        email = email.toLowerCase();

        let hash
        try {
            hash = await bcrypt.hash(password, 8)
        } catch (error) {
            throw new SystemError(error.message)
        }

        try {
            await User.create({ name, email, password: hash })
        } catch (error) {
            if (error.code === 11000)
                throw new DuplicityError('user already exists')

            throw new SystemError(error.message)
        }

    })()
}

export default registerUser