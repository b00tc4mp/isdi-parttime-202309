import retrieveUser from '../logic/retrieveUser.js'

export default (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        retrieveUser(userId)
            .catch(error => {
                let status = 500

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            })
            .then(user => res.json(user))
    } catch (error) {
        let status = 500

        res.satus(status).json({ error: error.constructor.name, message: error.message })
    }
}