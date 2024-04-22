import { errors } from 'com'
import { Dog } from '../data/models.js'

const { NotFoundError } = errors

export default async function retrieveDog() {
    try {
        const dogs = await Dog.find().select('-__v').lean()

        if (dogs.length === 0) {
            throw new NotFoundError('dogs not found')
        }

        dogs.forEach(dogs => {
            dogs.id = dogs._id.toString()
            delete dogs._id
        })

        return dogs

    } catch (error) {
        throw error
    }
}