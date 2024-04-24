import logic from '../logic/index.js'
import { errors } from 'com'
const { DuplicityError, ContentError } = errors
import jwt from 'jsonwebtoken'

export default async function getIngredientsListHandler(req, res) {

	const token = req.headers.authorization.substring(7)

	const payload = jwt.verify(token, process.env.JWT_SECRET)
	const { sub: userId } = payload

	const recipeId = req.params.recipeId

	try {
		const ingredients = await logic.getIngredientsList(userId, recipeId)
		res.status(201).send(ingredients)

	} catch (error) {
		let status = 500
		if (error instanceof ContentError || error instanceof TypeError)
			status = 500
		if (error instanceof DuplicityError)
			status = 409

		res.status(status).json({ error: error.constructor.name, message: error.message })
	}
}