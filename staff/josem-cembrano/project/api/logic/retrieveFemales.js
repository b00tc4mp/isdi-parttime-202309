import { errors, validate } from 'com'
import { User, Dog } from '../data/models.js'

const { UnauthorizedError, NotFoundError } = errors

export default async function retrieveMales(userId, name, gender) {
    validate.id(userId, 'userId')
    validate.text(name, 'name')
    validate.text(gender, 'gender')

    try {
        const user = await User.findById(userId)

        if (!user)
            throw new NotFoundError('user not found')

        if (!user.Admin)
            throw new UnauthorizedError('The user does not have permission to perform this action')

        if (!name) {
            throw new NotFoundError('wrong name')
        }

        if (gender !== 'female') {
            throw new NotFoundError('wrong gender')
        }

        const females = await Dog.find({ author: userId, name, gender: 'female' }).select('-__v').lean()

        if (!females || females.length === 0) {
            throw new NotFoundError('No females found')
        }

        females.forEach(females => {
            females.id = females._id.toString()
            delete females._id
        })

        return females

    } catch (error) {
        throw error
    }
}