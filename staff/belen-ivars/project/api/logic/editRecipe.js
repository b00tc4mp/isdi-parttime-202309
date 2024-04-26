import { validate } from "com"
import { User, Recipe } from '../data/models.js'
import { NotFoundError, ContentError, SystemError } from "com/errors.js"
import checkIngredient from "./checkIngredient.js"


export default async function editRecipe(userId, recipeId, title, description, image, ingredients, diet, complexity, method) {
	validate.id(userId, 'user id')
	validate.id(recipeId, 'recipe id')

	if (title) validate.text(title, 'title')
	if (description) validate.text(description, 'description')
	//if (image) validate.image pròximament

	let user

	try {
		user = await User.findById(userId)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!user)
		throw new NotFoundError('user not found')

	let recipe

	try {
		recipe = await Recipe.findById(recipeId)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!recipe)
		throw new NotFoundError('recipe not found')

	let recipeUpdated

	try {
		if (title)
			try {
				recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { title: title })
			} catch (error) {
				throw new SystemError(error.message)
			}

		if (description)
			try {
				recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { description: description })
			} catch (error) {
				throw new SystemError(error.message)
			}


		if (image)
			try {
				recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { image: image })
			} catch (error) {
				throw new SystemError(error.message)
			}


		if (ingredients) {
			let ingredientsOfThisRecipe = []
			try {
				const ingredientList = ingredients.split(', ')
				for (let ingredient of ingredientList) {
					const result = await checkIngredient(user.id, ingredient)

					ingredientsOfThisRecipe.push(result._id)
				}
			} catch (error) {
				throw new SystemError(error.message, 'es trenca ací')
			}

			try {
				recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { ingredients: ingredientsOfThisRecipe })
			} catch (error) {
				throw new SystemError(error.message)
			}
		}


		if (diet)
			try {
				recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { diet: diet })
			} catch (error) {
				throw new SystemError(error.message)
			}


		if (complexity)
			try {
				recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { complexity: complexity })
			} catch (error) {
				throw new SystemError(error.message)
			}


		if (method)
			try {
				recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { method: method })
			} catch (error) {
				throw new SystemError(error.message)
			}



	} catch (error) {
		throw new ContentError('recipe cannot be edited')
	}
	return recipeUpdated

}
