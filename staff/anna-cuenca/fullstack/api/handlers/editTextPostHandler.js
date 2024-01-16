const logic = require('../logic')
const { ContentError, NotFoundError, TypeError, CredentialsError } = require('../logic/errors')

module.exports = (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { postId, text } = req.body

        logic.editTextPost(userId, postId, text, error => {
            if (error) {
                let status = 500


                if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(204).send()
        })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}