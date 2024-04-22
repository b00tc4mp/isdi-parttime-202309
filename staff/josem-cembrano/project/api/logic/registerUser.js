import bcrypt from 'bcryptjs'
import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, DuplicityError } = errors

export default async function registerUser(name, email, password) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.password(password, 'password')

    try {
        const existingAdminCount = await User.countDocuments({ Admin: true })
        const isAdmin = existingAdminCount === 0

        const hash = await bcrypt.hash(password, 8)

        const user = await User.create({ name, email, password: hash, Admin: isAdmin })

        return user

    } catch (error) {
        if (error.code === 11000)
            throw new DuplicityError('user already exists')
        throw new SystemError(error.message)
    }
}