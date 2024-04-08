import { errors } from 'com'
import { History } from '../data/models.js'

const { NotFoundError } = errors

export default async function retrieveHistory() {
    try {
        const history = await History.find().select('-__v').lean()

        if (history.length === 0) {
            throw new NotFoundError('history not found')
        }

        history.forEach(history => {
            history.id = history._id.toString()
            delete history._id
        })

        return history

    } catch (error) {
        throw error
    }
}