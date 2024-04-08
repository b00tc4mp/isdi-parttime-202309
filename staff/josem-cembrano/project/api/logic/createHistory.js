import { validate, errors } from 'com'
import { User, History } from '../data/models.js'

const { SystemError, NotFoundError, UnauthorizedError } = errors

export default async function createHistory(userId, image, text) {
    validate.id(userId, 'userId')
    validate.text(image, 'image')
    validate.text(text, 'text')

    try {
        const user = await User.findById(userId)

        if (!user)
            throw new NotFoundError('User not found')

        if (!user.Admin)
            throw new UnauthorizedError('The user does not have permission to perform this action')

        const history = await History.create({ author: userId, image, text })

        if (!history) {
            throw new SystemError('Failed to create history')
        }

    } catch (error) {
        throw error
    }
}