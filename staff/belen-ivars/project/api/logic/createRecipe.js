import { validate, errors } from 'com'
import { Recipe, User } from '../data/models.js'
import checkIngredient from './checkIngredient.js'
const { SystemError, NotFoundError } = errors

async function createRecipe(userId, title, description, image, ingredients, diet, complexity, method) {
	validate.text(title, 'title')
	validate.text(description, 'description')
	validate.text(image, 'image')
	validate.id(userId, 'id')

	let user
	try {
		user = await User.findById(userId)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!user)
		throw new NotFoundError('user not found')

	let ingredientsOfThisRecipe = []

	try {
		for (let ingredient of ingredients) {
			const result = await checkIngredient(user.id, ingredient)
			ingredientsOfThisRecipe.push(result._id)
		}
	} catch (error) {
		throw new SystemError(error.message)
	}

	let recipe

	try {
		recipe = await Recipe.create({ author: user.id, title, description, image, ingredients: ingredientsOfThisRecipe, diet, complexity, method })
	} catch (error) {
		throw new SystemError(error.message)
	}
	return recipe
}

export default createRecipe