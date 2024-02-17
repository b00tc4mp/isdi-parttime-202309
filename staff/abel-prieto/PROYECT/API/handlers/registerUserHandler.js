import registerUser from '../logic/registerUser.js'

export default (req, res) => {
    try {
        const { name, email, password } = req.body

        registerUser(name, email, password)
            .catch(error => {
                let status = 500

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            })
            .then(() => res.status(201).send())
    } catch (error) {
        let status = 500

        if (error.code === 11000)
            status = 409

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}
