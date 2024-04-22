import { NotFoundError } from "com/errors.js"
import { Recipe, User } from "../data/models.js"

async function retrieveRecipes(id) {

	const user = await User.findById(id)

	if (!user) {
		throw new NotFoundError('No user found')
	}

	console.log('user exists')
	const recipes = await Recipe.find().lean()

	// const recipesWithFavs = recipes.map(recipe => {
	// 	return { ...recipe, fav: user.favs.some(recipeObjectId => recipeObjectId.toString() === recipe._id.toString()) };
	// })

	// const recipesFormated = recipesWithFavs.map(_recipe => {
	// 	const { recipe, ...rest } = _recipe;
	// 	return { ...recipe, ...rest };
	// });
	recipes.forEach(recipe => {
		recipe.fav = user.favs.some(recipeObjectId => recipeObjectId.toString() === recipe._id.toString())
	})
	return recipes
}

export default retrieveRecipes