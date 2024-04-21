import { NotFoundError } from "com/errors.js"
import { Recipe, User } from "../data/models.js"

async function retrieveFavRecipes(id) {

	const user = await User.findById(id)

	if (!user) {
		throw new NotFoundError('No user found')
	}

	console.log('user exists')
	const favRecipes = await Recipe.find({ _id: { $in: user.favs } })

	favRecipes.forEach(recipe => {
		recipe.fav = user.favs.some(recipeObjectId => recipeObjectId.toString() === recipe.id)
	})

	return favRecipes
}

export default retrieveFavRecipes