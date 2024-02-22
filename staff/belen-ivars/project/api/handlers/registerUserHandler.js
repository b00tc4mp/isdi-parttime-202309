import logic from '../logic/index.js'
import { errors } from 'com'
const { DuplicityError, ContentError } = errors

export default (req, res) => {
	const { name, email, password } = req.body

	try {
		logic.registerUser(name, email, password)

			.then(() => res.status(201).send())
			.catch(error => {

				let status = 500
				if (error instanceof DuplicityError)
					status = 409
				res.status(status).json({ error: error.constructor.name, message: error.message })
			})

	} catch (error) {
		let status = 500
		if (error instanceof ContentError || error instanceof TypeError)
			res.status(status).json({ error: error.constructor.name, message: error.message })
	}
}