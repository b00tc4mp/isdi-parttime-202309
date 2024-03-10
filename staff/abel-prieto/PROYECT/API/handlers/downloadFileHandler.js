import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import downloadFile from '../logic/downloadFile.js'
import { errors } from 'com'

const { JsonWebTokenError } = jwt
const { NotFoundError, ContentError, TokenError, AuthorizationError } = errors

export default async (req, res) => {
    const token = req.headers.authorization.substring(7)
    const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

    const { fileId } = req.params

    try {
        const file = await downloadFile(userId, fileId)

        res.download(file)
    } catch (error) {
        let status = 500

        if (error instanceof NotFoundError) {
            status = 404
        }

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        if (error instanceof AuthorizationError) {
            status = 401
        }

        if (error instanceof JsonWebTokenError) {
            status = 401
            error = new TokenError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}