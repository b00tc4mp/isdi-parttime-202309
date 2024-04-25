import { validate, errors } from 'com'
import { User, Ingredient } from '../data/models.js'
const { ContentError, NotFoundError, SystemError } = errors

async function checkIngredient(userId, ingredient) {
	validate.id(userId, 'id')
	validate.text(ingredient, 'ingredient')

	let user
	try {
		user = await User.findById(userId)
	} catch (error) {
		throw new SystemError(error.message)
	}
	if (!user)
		throw new NotFoundError('user not found')

	const ingredientName = ingredient.toLowerCase()

	let isAnIngredient

	try {
		isAnIngredient = await Ingredient.findOne({ name: ingredientName })
		if (isAnIngredient) {
			return isAnIngredient
		}
	} catch (error) {
		throw new SystemError(error.message)
	}

	let newIngredient

	try {
		newIngredient = await Ingredient.create({ name: ingredientName })
		return newIngredient
	} catch (error) {
		throw new SystemError(error.message)
	}
}


export default checkIngredient