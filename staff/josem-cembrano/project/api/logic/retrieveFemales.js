import { errors } from 'com'
import { Dog } from '../data/models.js'

const { NotFoundError } = errors

export default async function retrieveFemales() {
    try {

        const females = await Dog.find({ gender: 'female', puppy: false }).select('-__v').lean()

        if (!females || females.length === 0) {
            throw new NotFoundError('Add new Females!!')
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