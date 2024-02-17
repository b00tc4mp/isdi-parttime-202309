import authenticateUser from '../logic/authenticateUser.js'

export default (req, res) => {
    try {
        const { email, password } = req.body

        authenticateUser(email, password)
            .catch(error => {
                let status = 500

                res.status(status).json({ error: error.constructor.name, message: error.message })
            })
            .then(userId => res.json(userId))
    } catch (error) {
        let status = 500

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}