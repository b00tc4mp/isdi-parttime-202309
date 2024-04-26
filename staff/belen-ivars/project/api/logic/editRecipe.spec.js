import dotenv from 'dotenv'
dotenv.config()

import mongoose, { mongo } from 'mongoose'

import { expect } from 'chai'
import random from './helpers/random.js'
import editRecipe from './editRecipe.js'
import { errors } from 'com'
import { User, Recipe } from '../data/models.js'
import { NotFoundError, SystemError } from 'com/errors.js'
const { ObjectId } = mongoose.Types
const { DuplicityError } = errors

describe('editRecipe', () => {
	before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))
	beforeEach(async () => await User.deleteMany())

	it('on success', async () => {
		const name = random.name()
		const email = random.email()
		const password = random.password()
		const user = await User.create({ name, email, password })

		const title = random.name()
		const description = random.text()
		const image = random.image()

		const ingredients2 = []
		const ingredient4 = random.ingredientName()
		const ingredient5 = random.ingredientName()
		const ingredient6 = random.ingredientName()
		ingredients2.push(ingredient4, ingredient5, ingredient6)

		const diet = random.diet()
		const complexity = random.complexity()
		const method = random.method()

		const author = user.id

		let recipe = await Recipe.create({ author, title, description, image, ingredients2, diet, complexity, method })

		const title2 = random.name()
		const description2 = random.text()
		const image2 = random.image()

		const ingredient1 = random.ingredientName()
		const ingredient2 = random.ingredientName()
		const ingredient3 = random.ingredientName()
		const ingredients = `${ingredient1}, ${ingredient2}, ${ingredient3}`

		const diet2 = random.diet()
		const complexity2 = random.complexity()
		const method2 = random.method()

		let recipeEdited
		try {
			recipeEdited = await editRecipe(user.id, recipe.id, title2, description2, image2, ingredients, diet2, complexity2, method2)
		} catch (error) {
			expect(recipeEdited).to.be.exist
			expect(recipeEdited.title).to.equal(title2)
			expect(recipeEdited.image).to.equal(image2)
			expect(recipeEdited.description).to.equal(description2)
			expect(author).to.equal(user.id)
			expect(recipeEdited.diet).to.equal(diet2)
			expect(recipeEdited.complexity).to.equal(complexity2)
			expect(recipeEdited.method).to.equal(method2)
			expect(editRecipe).to.throw(SystemError)
			expect(editRecipe).to.throw(NotFoundError)
			throw new Error(error.message)

		}

	})

	// it('fails on non existing user', async () => {

	// 	const title = random.name()
	// 	const description = random.text()
	// 	const image = random.image()
	// 	const author = new ObjectId().toString()

	// 	try {
	// 		await editRecipe(author, title, description, image)
	// 		throw new Error('should not reach this point')
	// 	} catch (error) {
	// 		expect(error).to.be.instanceOf(NotFoundError)
	// 		expect(error.message).to.equal('user not found')
	// 	}
	// })

	after(async () => await mongoose.disconnect())
})