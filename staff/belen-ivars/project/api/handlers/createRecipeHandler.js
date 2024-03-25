import { ContentError, NotFoundError } from "com/errors.js";
import logic from "../logic/index.js";
import { errors } from 'com'

export default async (req, res) => {
	const { author, title, description, image } = req.body

	try {
		await logic.createRecipe(author, title, description, image)

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