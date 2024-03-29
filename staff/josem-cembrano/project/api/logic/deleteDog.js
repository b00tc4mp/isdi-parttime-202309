import { validate, errors } from 'com'
import { User, Dog } from '../data/models.js'

const { SystemError, NotFoundError, UnauthorizedError } = errors

export default async function deleteDog(userId, dogId) {
    validate.id(userId, 'userId')
    validate.id(dogId, 'dogId')

    try {
        const user = await User.findById(userId)
        const dog = await Dog.findById(dogId)

        if (!user)
            throw new NotFoundError('user not found')

        if (!user.Admin)
            throw new UnauthorizedError('the user does not have permission to perform this action')

        if (!dog)
            throw new NotFoundError('dog not found')

        const removeDog = await Dog.findByIdAndDelete(dogId)

        if (!removeDog)
            throw new SystemError('failed to delete dog')

        return removeDog
    } catch (error) {
        throw error
    }
}