import { errors } from 'com'
import { Dog } from '../data/models.js'

const { NotFoundError } = errors

export default async function retrievePuppies() {
    try {

        const puppies = await Dog.find({ puppy: true }).select('-__v').lean()

        if (!puppies || puppies.length === 0) {
            throw new NotFoundError('Add new puppies!!')
        }

        puppies.forEach(puppy => {
            puppy.id = puppy._id.toString()
            delete puppy._id
        })

        return puppies

    } catch (error) {
        throw error
    }
}