import jwt from 'jsonwebtoken'
const { JsonWebTokenError } = jwt

import logic from '../logic/index.js'

import { errors } from 'com'
const { NotFoundError, ContentError, CredentialsError, TokenError } = errors

export default async (req, res) => {
    try {
        const { email, password } = req.body

        const adminId = await logic.authenticateAdmin(email, password)

        const token = await jwt.sign({ sub: adminId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION })

        res.json(token)
    } catch (error) {
        let status = 500

        if (error instanceof NotFoundError)
            status = 404
        else if (error instanceof CredentialsError)
            status = 401
        else if (error instanceof ContentError || error instanceof TypeError)
            status = 406
        else if (error instanceof JsonWebTokenError) {
            status = 401
            error = new TokenError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}