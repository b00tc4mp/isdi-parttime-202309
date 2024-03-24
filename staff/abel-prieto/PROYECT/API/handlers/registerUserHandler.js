import registerUser from '../logic/registerUser.js'
import { errors } from 'com'
const { DuplicityError, ContentError } = errors

export default (req, res) => {
    const { username, email, password } = req.body

    try {
        registerUser(username, email, password)
            .then(() => res.status(201).send())
            .catch(error => {
                let status = 500

                if (error instanceof DuplicityError) {
                    status = 409
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 409
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}
