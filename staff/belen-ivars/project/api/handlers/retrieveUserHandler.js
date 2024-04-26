import { ContentError, NotFoundError } from 'com/errors.js'
import logic from '../logic/index.js'
import { validate } from 'com'
import jwt from 'jsonwebtoken'

const complexRetrieve = async (req, res) => {

	const token = req.headers.authorization.substring(7)

	const payload = jwt.verify(token, process.env.JWT_SECRET)
	const { sub: userId } = payload

	try {
		validate.id(userId, 'id')
	} catch (e) {
		res.status(400).send()
		return
	}

	try {
		const user = await logic.retrieveUser(userId)
		res.status(200).send(user)
	} catch (e) {
		if (e instanceof NotFoundError) {
			res.status(404).send(e)
		} else if (e instanceof ContentError) {
			res.status(400).send(e)
		} else {
			res.status(500).send(e)
		}
	}
}

export default complexRetrieve 