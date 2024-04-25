import { NotFoundError, SystemError } from "com/errors.js"
import { Recipe, User } from "../data/models.js"

export default async function retrieveRecipes(id) {

	let user
	try {
		user = await User.findById(id)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!user) {
		throw new NotFoundError('No user found')
	}

	let recipes
	try {
		recipes = await Recipe.find().lean()
	} catch (error) {
		throw new SystemError(error.message)
	}

	recipes.forEach(recipe => {
		recipe.fav = user.favs.some(recipeObjectId => recipeObjectId.toString() === recipe._id.toString())
	})
	return recipes
}
