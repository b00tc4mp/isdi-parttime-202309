import { SystemError } from 'com/errors.js'
import { Ingredient, Recipe, User } from '../data/models.js'

async function getIngredientsList(userId, recipeId) {

	const user = await User.findById(userId)

	if (!user) {
		throw new NotFoundError('No user found')
	}

	let recipe
	try {
		recipe = await Recipe.findById(recipeId)
		console.log(recipe)
	} catch (error) {
		throw new SystemError(error.message)
	}
	console.log(recipe.ingredients)
	if (!recipe || !recipe.ingredients) {
		return []
	}

	const ingredients = []

	for (let ingredientId of recipe.ingredients) {
		try {
			const ingredient = await Ingredient.findById(ingredientId)

			if (ingredient)
				ingredients.push(ingredient.name)
			console.log('estic en lògica backend')
		} catch (error) {
			throw new SystemError(error.message)
		}
	}
	return ingredients
}

export default getIngredientsList