const logic = require('../logic')
const { ContentError, NotFoundError, TypeError, CredentialsError } = require('../logic/errors')

module.exports = (req, res) => { //no hay un jsonBodyParser porque no enviamos nada en el body, enviamos una cabecera con el id
    try {
        const userId = req.headers.authorization.substring(7)
        logic.retrieveUser(userId, (error, user) => {
            if (error) {
                let status = 500
                if (error instanceof NotFoundError)
                    status = 404
                res.status(status).json({ error: error.constructor.name, message: error.message })
                return
            }
            res.json(user)
        })
    } catch (error) {
        let status = 500
        if (error instanceof ContentError || error instanceof TypeError)
            status = 406
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}