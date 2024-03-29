import { errors } from 'com'
import { Dog } from '../data/models.js'

const { NotFoundError } = errors

export default async function retrieveMales() {
    try {

        const males = await Dog.find({ gender: 'male', puppy: false }).select('-__v').lean()

        if (!males || males.length === 0) {
            throw new NotFoundError('No males found')
        }

        males.forEach(males => {
            males.id = males._id.toString()
            delete males._id
        })

        return males

    } catch (error) {
        throw error
    }
}