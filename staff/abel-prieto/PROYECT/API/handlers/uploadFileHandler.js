import fs from 'fs'
import uploadFile from '../logic/uploadFile.js'
import { errors } from 'com'

const { SystemError, DuplicityError, NotFoundError, ContentError } = errors

async function saveFile(file) {
    const newPath = `./uploads/${file.originalname}`

    try {
        await fs.renameSync(file.path, newPath)
        return newPath
    } catch (error) {
        throw new SystemError(`Failed to save file: ${error.message}`)
    }
}

export default async (req, res) => {
    const userId = req.headers.authorization.substring(7)
    const { originalname, mimetype } = req.file

    try {
        await saveFile(req.file)
        const result = await uploadFile(userId, originalname, mimetype)

        res.json({ user: result.user, file: result.file })

    } catch (error) {
        let status = 500

        if (error instanceof NotFoundError)
            status = 404

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        if (error instanceof DuplicityError) {
            status = 409
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}