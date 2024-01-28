import logic from '../logic/index.js'
import { ContentError, NotFoundError, CredentialsError, DuplicityError } from '../logic/errors.js'

export default (req, res) => {
	try {
		const userId = req.headers.authorization.substring(7)

		const { newEmail, confirmEmail, password } = req.body

		logic.changePasswordUser(userId, password, newPassword, confirmNewPassword)
			.then(() => res.status(200).send())
			.catch(error => {
				let status = 500

				if (error instanceof NotFoundError)
					status = 404
				else if (error instanceof CredentialsError)
					status = 401
				else if (error instanceof DuplicityError)
					status = 409

				res.status(status).json({ error: error.constructor.name, message: error.message })
			})

	} catch (error) {
		let status = 500

		if (error instanceof ContentError || error instanceof TypeError)
			status = 406

		res.status(status).json({ error: error.constructor.name, message: error.message })
	}
}