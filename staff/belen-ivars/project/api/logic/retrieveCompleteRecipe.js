import { NotFoundError, SystemError } from "com/errors.js"
import { Recipe, User } from "../data/models.js"

export default async function retrieveCompleteRecipe(userId, recipeID) {

	let user
	try {
		user = await User.findById(userId)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!user) {
		throw new NotFoundError('No user found')
	}

	let recipe
	try {
		recipe = await Recipe.findById(recipeID).lean()
	} catch (error) {
		throw new SystemError(error.message)
	}

	recipe.fav = user.favs.includes(recipe._id)

	return recipe
}