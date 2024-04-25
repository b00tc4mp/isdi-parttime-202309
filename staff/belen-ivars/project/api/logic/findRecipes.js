import { SystemError, NotFoundError } from 'com/errors.js'
import { Recipe, Ingredient, User } from '../data/models.js'

export default async function findRecipes(userId, ingredients, diet, complexity, method) {

	let user

	try {
		user = await User.findById(userId)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!user)
		throw new NotFoundError('user not found')

	const filter = {}

	if (diet) filter.diet = { $in: diet }
	if (complexity) filter.complexity = { $in: complexity }
	if (method) filter.method = { $in: method }

	if (ingredients) {
		let ingredientsList = []
		for (let ingredient of ingredients) {
			try {
				const _ingredient = await Ingredient.findOne({ name: ingredient })
				ingredientsList.push(_ingredient)

			} catch (error) {
				throw new SystemError(error.message)
			}
		}
		filter.ingredients = { $in: ingredientsList }
	}

	try {
		const recipes = await Recipe.find(filter)
		return recipes
	} catch (error) {
		throw new SystemError(error.message)
	}
}
