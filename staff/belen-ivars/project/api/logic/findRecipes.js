import { SystemError } from 'com/errors.js'
import { Recipe, Ingredient, User } from '../data/models.js'

async function findRecipes(userId, ingredients, diet) {

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
	// if (method) filter.method = method
	// if (complexity) filter.complexity = complexity
	// if (time) {
	// 	filter.time = { $lte: parseInt(tiempo) }
	// }
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

export default findRecipes  