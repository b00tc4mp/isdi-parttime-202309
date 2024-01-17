const logic = require('../logic')
const { ContentError, NotFoundError, TypeError, CredentialsError } = require('../logic/errors')

module.exports = (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)
        const { image, text } = req.body
        logic.createPost(userId, image, text, error => {
            if (error) {
                let status = 400
                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404
                res.status(status).json({ error: error.constructor.name, message: error.message })
                return
            }
            res.status(201).send()
        })
    } catch (error) {
        let status = 400
        if (error instanceof ContentError)
            status = 406
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}