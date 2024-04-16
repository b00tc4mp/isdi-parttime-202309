import { ContentError, NotFoundError } from "com/errors.js"
import logic from "../logic/index.js"

export default async (req, res) => {
	const userId = req.params.id
	const recipeId = req.body

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