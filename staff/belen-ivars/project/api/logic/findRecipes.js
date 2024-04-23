import { Recipe, Ingredient } from '../data/models.js'

async function findRecipes(userId, ingredients, diet) {

	console.log(ingredients, diet, 'prueba')

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
			const _ingredient = await Ingredient.findOne({ name: ingredient })
			ingredientsList.push(_ingredient)
		}
		filter.ingredients = { $in: ingredientsList }
	}


	const recipes = await Recipe.find(filter)
	console.log(recipes)
	return recipes
}

export default findRecipes  