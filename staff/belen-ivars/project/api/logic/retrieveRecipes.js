import { NotFoundError } from "com/errors.js"
import { Recipe, User } from "../data/models.js"

async function retrieveRecipes(id) {

	const user = await User.findById(id)

	if (!user) {
		throw new NotFoundError('No user found')
	}

	console.log('user exists')
	const recipes = await Recipe.find()

	recipes.forEach(recipe => {
		recipe.fav = user.favs.some(recipeObjectId => recipeObjectId.toString() === recipe._id)
	})

	return recipes
}

export default retrieveRecipes