import dotenv from 'dotenv'
dotenv.config()

import mongoose, { mongo } from 'mongoose'

import { expect } from 'chai'
import random from './helpers/random.js'
import createRecipe from './createRecipe.js'
import { errors } from 'com'
import { User, Recipe } from '../data/models.js'
import { NotFoundError, SystemError } from 'com/errors.js'
const { ObjectId } = mongoose.Types
const { DuplicityError } = errors

describe('createRecipe', () => {
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

		const ingredients = []
		const ingredient1 = random.ingredientName()
		const ingredient2 = random.ingredientName()
		const ingredient3 = random.ingredientName()
		ingredients.push(ingredient1, ingredient2, ingredient3)

		const diet = random.diet()
		const complexity = random.complexity()
		const method = random.method()

		const author = user.id

		let recipe
		try {
			recipe = await createRecipe(author, title, description, image, ingredients, diet, complexity, method)
		} catch (error) {
			expect(recipe).to.exist
			expect(recipe.title).to.equal(title)
			expect(recipe.image).to.equal(image)
			expect(recipe.description).to.equal(description)
			expect(author).to.equal(user.id)
			expect(recipe.ingredients).to.equal(ingredients)
			expect(recipe.diet).to.equal(diet)
			expect(recipe.complexity).to.equal(complexity)
			expect(recipe.method).to.equal(method)
			expect(createRecipe).to.throw(SystemError)

		}

	})

	it('fails on non existing user', async () => {

		const title = random.name()
		const description = random.text()
		const image = random.image()
		const author = new ObjectId().toString()

		try {
			await createRecipe(author, title, description, image)
			throw new Error('should not reach this point')
		} catch (error) {
			expect(error).to.be.instanceOf(NotFoundError)
			expect(error.message).to.equal('user not found')
		}
	})

	after(async () => await mongoose.disconnect())
})