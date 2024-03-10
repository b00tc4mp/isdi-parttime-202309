import fs from 'fs'
import path from 'path'
import { User, File } from '../data/models.js'
import { validate, errors } from 'com'
const { SystemError, NotFoundError, AuthorizationError } = errors

export default async function downloadFile(userId, fileId) {
    validate.id(userId, 'ID User')
    validate.id(fileId, 'ID File')

    try {
        const user = await User.findById(userId)

        if (!user) {
            throw new NotFoundError('User not found')
        }

        const file = await File.findById(fileId)

        if (!file) {
            throw new NotFoundError('File not found')
        }

        if (file.owner === user.id || user.role[0] === 'admin') {
            const originalName = file.originalName
            const filePath = `./uploads/${file._id.toString()}`

            // Devolvemos la info de la ruta y el nombre original
            return { filePath, originalName }
        } else {
            throw new AuthorizationError('Authorization denied. Try again')
        }

    } catch (error) {
        if (error instanceof NotFoundError || error instanceof AuthorizationError) {
            throw error
        }

        throw new SystemError(error.message)
    }
}