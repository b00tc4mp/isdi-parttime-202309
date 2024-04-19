import { validate, errors } from 'com'
import { User, Dog } from '../data/models.js'

const { SystemError, NotFoundError, UnauthorizedError } = errors

export default async function createDog(userId, image, afix, name, gender, birthDate, puppy, text) {
    validate.id(userId, 'userId')
    validate.text(image, 'image')
    validate.text(afix, 'afix')
    validate.text(name, 'name')
    validate.gender(gender)
    validate.text(birthDate, 'birthDate')
    validate.boolean(puppy, 'puppy')
    validate.text(text, 'text')

    try {
        const user = await User.findById(userId)

        if (!user)
            throw new NotFoundError('User not found')

        if (!user.Admin)
            throw new UnauthorizedError('The user does not have permission to perform this action')

        const dog = await Dog.create({ author: userId, image, afix, name, gender, birthDate, puppy, text })

        if (!dog) {
            throw new SystemError('Failed to create picture')
        }

    } catch (error) {
        throw error
    }
}
