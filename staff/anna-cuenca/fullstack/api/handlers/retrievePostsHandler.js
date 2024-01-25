import logic from '../logic/index.js'
import { NotFoundError, ContentError, CredentialsError } from '../logic/errors.js'

export default (req, res) => { //no hay un jsonBodyParser porque no enviamos nada en el body, enviamos una cabecera con el id
    try {
        const userId = req.headers.authorization.substring(7)

        logic.retrievePosts(userId)

            .then(posts => res.json(posts))
            .catch(error => {

                let status = 500


                if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

            })


    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}