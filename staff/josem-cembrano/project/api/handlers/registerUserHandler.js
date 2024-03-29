import logic from '../logic/index.js'
import { errors } from 'com'

const { ContentError, DuplicityError } = errors

export default async (req, res) => {
    try {
        const { name, email, password } = req.body

        await logic.registerUser(name, email, password)
        res.status(201).send()
    } catch (error) {
        let status = 500

        if (error instanceof DuplicityError) {
            status = 409
        } else if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }

}