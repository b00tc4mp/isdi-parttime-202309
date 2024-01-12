const logic = require('../logic')
const { DuplicityError, ContentError } = require('../logic/errors')

module.exports = (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { image, text } = req.body

        logic.createPost(userId, image, text, error => {
            if (error) {
                let status = 500

                if (error instanceof DuplicityError) {
                    status = 409
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
            // Envía código 201 de 'CREADO'
        })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}