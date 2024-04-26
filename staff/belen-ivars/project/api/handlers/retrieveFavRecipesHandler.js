import { ContentError, NotFoundError } from 'com/errors.js'
import logic from '../logic/index.js'
import { validate } from "com"
import jwt from 'jsonwebtoken'


const retrieveFavRecipesHandler = async (req, res) => {
	const token = req.headers.authorization.substring(7)

	const payload = jwt.verify(token, process.env.JWT_SECRET)
	const { sub: userId } = payload

	try {
		validate.id(userId, 'id')
	} catch (error) {

		return res.status(400).send()
	}

	try {
		const favRecipes = await logic.retrieveFavRecipes(userId)
		res.status(200).send(favRecipes)
	} catch (error) {
		if (error instanceof NotFoundError) {
			res.status(404).send(error)
		}
		else if (error instanceof ContentError) {
			res.status(400).send(error)
		} else {
			res.status(500).send(error)
		}
	}
}

export default retrieveFavRecipesHandler