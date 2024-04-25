import { SystemError } from 'com/errors.js'
import { Ingredient, Recipe, User } from '../data/models.js'

export default async function getIngredientsList(userId, recipeId) {

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
		recipe = await Recipe.findById(recipeId)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!recipe || !recipe.ingredients) {

		return []
	}

	const ingredients = []

	for (let ingredientId of recipe.ingredients) {

		try {
			const ingredient = await Ingredient.findById(ingredientId)

			if (ingredient)
				ingredients.push(ingredient.name)
		} catch (error) {
			throw new SystemError(error.message)
		}
	}

	return ingredients
}
