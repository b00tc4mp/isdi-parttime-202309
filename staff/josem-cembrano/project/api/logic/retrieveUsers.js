import { validate, errors } from 'com'
import { User } from '../data/models.js'

const { SystemError, NotFoundError } = errors

export default async function retrieveUsers(userId) {
    validate.id(userId, 'userId')

    let user

    try {
        user = await User.findById(userId).lean()
    } catch (error) {
        throw new SystemError(error.message)
    }

    if (!user)
        throw new NotFoundError('User not found')

    delete user._id
    delete user.password
    delete user.email

    return user
}