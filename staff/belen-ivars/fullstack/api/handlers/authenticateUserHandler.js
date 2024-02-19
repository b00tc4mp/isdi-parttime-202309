import jwt from 'jsonwebtoken'
const { JsonWebTokenError } = jwt

import logic from '../logic/index.js'

import { errors } from 'com'
const { NotFoundError, ContentError, CredentialsError, TokenError } = errors


export default (req, res) => {
	try {
		const { email, password } = req.body

		logic.authenticateUser(email, password)
			.then(userId => {
				const token = jwt.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXP })

				res.json(token)
			})
			.catch(error => {
				let status = 500

				if (error instanceof NotFoundError)
					status = 404

				else if (error instanceof CredentialsError)
					status = 401

				res.status(status).json({ error: error.constructor.name, message: error.message })
			})
	} catch (error) {
		let status = 500

		if (error instanceof ContentError || error instanceof TypeError)
			status = 406

		//açò Manu no ho ha posat però diria que també s'ha de posar
		else if (error instanceof JsonWebTokenError) {
			status = 401

			error = new TokenError(error.message)
		}

		res.status(status).json({ error: error.constructor.name, message: error.message })
	}
}