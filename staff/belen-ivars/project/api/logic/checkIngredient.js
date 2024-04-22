import { validate, errors } from 'com'
import { User, Ingredient } from '../data/models.js'
const { ContentError, NotFoundError, SystemError } = errors

async function checkIngredient(userId, ingredient) {
	validate.id(userId, 'id')
	validate.text(ingredient, 'ingredient')

	const user = await User.findById(userId)

	if (!user)
		throw new NotFoundError('user not found')
	console.log('user founded')

	const ingredientName = ingredient.toLowerCase()

	let isAnIngredient

	try {
		isAnIngredient = await Ingredient.findOne({ name: ingredientName })
		if (isAnIngredient) {
			console.log('ja era un ingredient')
			return isAnIngredient
		}
	} catch (error) {
		throw new SystemError(error.message)
	}

	let newIngredient

	try {
		newIngredient = await Ingredient.create({ name: ingredientName })
		console.log('nou ingredient creat')
	} catch (error) {
		throw new SystemError(error.message)
	}
	return newIngredient
}


export default checkIngredient