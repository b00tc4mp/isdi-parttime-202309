import { NotFoundError, SystemError } from "com/errors.js"
import { Recipe, User } from "../data/models.js"

async function retrieveFavRecipes(id) {

	let user
	try {
		user = await User.findById(id)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!user) {
		throw new NotFoundError('No user found')
	}

	let favRecipes
	try {
		favRecipes = await Recipe.find({ _id: { $in: user.favs } }).lean()
	} catch (error) {
		throw new SystemError(error.message)
	}

	favRecipes.forEach(recipe => {
		recipe.fav = user.favs.some(recipeObjectId => recipeObjectId.toString() === recipe._id.toString())
	})

	return favRecipes
}

export default retrieveFavRecipes