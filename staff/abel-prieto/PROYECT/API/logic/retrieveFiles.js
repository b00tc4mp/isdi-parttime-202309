import { User, File } from '../data/models.js'
import { validate, errors } from 'com'
const { SystemError, NotFoundError } = errors

export default async function retrieveFiles(userId) {
    validate.id(userId, 'ID User')

    try {
        const user = await User.findById(userId).lean()

        if (!user) {
            throw new NotFoundError('User not found')
        }

        if (user.role[0] === 'user') {
            const files = await File.find({ owner: userId }).lean()

            if (files.length === 0) {
                throw new NotFoundError('You dont have any files in your storage!')
            }

            const filesArray = files.map(file => ({
                id: file._id.toString(),
                name: file.name
            }))

            return filesArray
        }

        if (user.role[0] === 'admin') {
            const files = await File.find().lean()

            if (files.length === 0) {
                throw new NotFoundError('There arent any files on storage!')
            }

            const filesArray = files.map(file => ({
                id: file._id.toString(),
                name: file.name
            }))

            return filesArray
        }
    } catch (error) {
        if (error instanceof NotFoundError) {
            throw error
        }

        throw new SystemError(error.message)
    }
}