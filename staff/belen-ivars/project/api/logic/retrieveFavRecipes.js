import { NotFoundError } from "com/errors.js"
import { Recipe, User } from "../data/models.js"

async function retrieveFavRecipes(id) {

	const user = await User.findById(id)

	if (!user) {
		throw new NotFoundError('No user found')
	}

	console.log('user exists')
	const favRecipes = await Recipe.find({ _id: { $in: user.favs } }).lean()

	// const recipesWithFavs = favRecipes.map(recipe => {
	// 	return { ...recipe, fav: user.favs.some(recipeObjectId => recipeObjectId.toString() === recipe._id.toString()) };
	// })

	// const recipesFormated = recipesWithFavs.map(_recipe => {
	// 	const { recipe, ...rest } = _recipe;
	// 	return { ...recipe, ...rest };
	// });

	favRecipes.forEach(recipe => {
		recipe.fav = user.favs.some(recipeObjectId => recipeObjectId.toString() === recipe._id.toString())
	})

	return favRecipes
}

export default retrieveFavRecipes