import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import retrieveCompleteRecipe from './retrieveCompleteRecipe.js'
import { errors } from 'com'
import { User, Recipe } from '../data/models.js'
import { SystemError } from 'com/errors.js'
const { NotFoundError } = errors
const { ObjectId } = mongoose.Types

describe('retrieveCompleteRecipe', () => {
	before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))
	beforeEach(async () => await User.deleteMany())

	it('succeds on current user', async () => {
		const name = random.name()
		const email = random.email()
		const password = random.password()

		const user = await User.create({ name, email, password })

		const title = random.name()
		const description = random.text()
		const image = random.image()

		let ingredients = []
		const ingredient1 = new ObjectId()
		const ingredient2 = new ObjectId()
		const ingredient3 = new ObjectId()
		ingredients = [ingredient1, ingredient2, ingredient3]

		const diet = random.diet()
		const complexity = random.complexity()
		const method = random.method()

		const recipe = await Recipe.create({ author: user.id, title, description, image, ingredients, diet, complexity, method })

		let result
		try {
			result = await retrieveCompleteRecipe(user.id, recipe.id)
		} catch (error) {
			expect(user).to.exist
			expect(result).to.be.equal(recipe)
			expect(error).to.be.instanceOf(SystemError)
			expect(error).to.be.instanceOf(NotFoundError)

		}
	})

	// it('fails on non-existing user', async () => {
	// 	const name = random.name()
	// 	const email = random.email()
	// 	const password = random.password()

	// 	const user = await User.create({ name, email, password })

	// 	const title = random.name()
	// 	const description = random.text()
	// 	const image = random.image()

	// 	const ingredients = []
	// 	const ingredient1 = new ObjectId()
	// 	const ingredient2 = new ObjectId()
	// 	const ingredient3 = new ObjectId()
	// 	ingredients.push(ingredient1, ingredient2, ingredient3)

	// 	const diet = random.diet()
	// 	const complexity = random.complexity()
	// 	const method = random.method()

	// 	const recipe = await Recipe.create({ author: user.id, title, description, image, ingredients, diet, complexity, method })

	// 	const title2 = random.name()
	// 	const description2 = random.text()
	// 	const image2 = random.image()

	// 	const ingredients2 = []
	// 	const ingredient4 = new ObjectId()
	// 	const ingredient5 = new ObjectId()
	// 	const ingredient6 = new ObjectId()
	// 	ingredients.push(ingredient4, ingredient5, ingredient6)

	// 	const diet2 = random.diet()
	// 	const complexity2 = random.complexity()
	// 	const method2 = random.method()

	// 	const author2 = new ObjectId().toString()

	// 	const recipe2 = await Recipe.create({ author: author2, title: title2, description: description2, image: image2, ingredients: ingredients2, diet: diet2, complexity: complexity2, method: method2 })

	// 	const recipes = [recipe, recipe2]

	// 	try {
	// 		recipes = await retrieveCompleteRecipe(new ObjectId().toString())
	// 		throw new Error('should not reach this point')
	// 	} catch (error) {
	// 		expect(error).to.be.instanceOf(NotFoundError)
	// 		expect(error.message).to.equal('No user found')

	// 	}
	// })
	after(async () => await mongoose.disconnect())
})