const logic = require('../logic')
const { SystemError, DuplicityError, ContentError } = require('../logic/errors')

module.exports = (req, res) => {
    try {
        const { name, email, password } = req.body

        logic.registerUser(name, email, password, error => {
            if (error) {

                let status = 400
                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof DuplicityError)
                    status = 409

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