import { ContentError, NotFoundError } from 'com/errors.js'
import logic from '../logic.index.js'
import { validate } from "com"


const retrieveRecipesHandler = async (req, res) => {
	const userId = req.params.userId

	try {
		validate.id(userId, 'id')
	} catch (error) {

		return res.status(400).send()
	}

	try {
		const recipes = await logic.retrieveRecipes(userId)
		res.status(200).send(recipes)
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

export default retrieveRecipesHandler