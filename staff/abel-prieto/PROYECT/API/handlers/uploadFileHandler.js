import fs from 'fs'
import uploadFile from '../logic/uploadFile.js'
import { errors } from 'com'
const { NotFoundError, ContentError } = errors

function saveFile(file) {
    const newPath = `./uploads/${file.originalname}`
    fs.renameSync(file.path, newPath)

    return
}

export default (req, res) => {
    const userId = req.headers.authorization.substring(7)
    const { originalname: name, mimetype: type } = req.file

    saveFile(req.file)

    try {
        uploadFile(userId, name, type)
            .then(({ user, file }) => res.json({ user, file, message: 'Upload file!' }))
            .catch(error => {
                let status = 500

                if (error instanceof NotFoundError) {
                    status = 404
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}