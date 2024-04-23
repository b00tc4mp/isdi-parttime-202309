import { ContentError, NotFoundError } from "com/errors.js";
import logic from "../logic/index.js";
import { errors } from 'com'
import jwt from 'jsonwebtoken'

const createRecipeHandler = async (req, res) => {

	const token = req.headers.authorization.substring(7)

	const { sub: author } = jwt.verify(token, process.env.JWT_SECRET)

	const { title, description, image, ingredientsList, diet, complexity, method } = req.body

	try {
		await logic.createRecipe(author, title, description, image, ingredientsList, diet, complexity, method)

		res.status(201).send()
	} catch (error) {
		let status = 500
		if (error instanceof NotFoundError)
			status = 404
		if (error instanceof ContentError || error instanceof TypeError)
			status = 500

		res.status(status).json({ error: error.constructor.name, message: error.message })
	}
}

export default createRecipeHandler