const logic = require('../logic')
const { NotFoundError, ContentError } = require('../logic/errors')

module.exports = (req, res) => {
    // Ponemos :postId con (:) porque express lo toma como un parámetro variable y lo mete en la request

    try {
        const userId = req.headers.authorization.substring(7)

        const { postId } = req.params
        // Con .params recoge lo que indicamos mediante los (:) de la navegación dentro de un Objeto {}

        logic.toggleLikePost(userId, postId, error => {
            if (error) {
                let status = 500

                if (error instanceof NotFoundError) {
                    status = 404
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }
    
            res.status(204).send()
            // Envía código 204 de 'OK' pero vacío
        })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}