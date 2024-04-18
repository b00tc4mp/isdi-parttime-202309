import { ContentError, NotFoundError } from "com/errors.js"
import logic from "../logic/index.js"
import jwt from 'jsonwebtoken'

const deleteRecipeHandler = async (req, res) => {
	const recipeId = req.params.recipeId
	const token = req.headers.authorization.substring(7)

	const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

	try {
		await logic.deleteRecipe(userId, recipeId)

		res.status(204).send()
	} catch (error) {
		let status = 500
		if (error instanceof NotFoundError)
			status = 404
		if (error instanceof ContentError || error instanceof TypeError)
			status = 500

		res.status(status).json({ error: error.constructor.name, message: error.message })
	}
}

export default deleteRecipeHandler