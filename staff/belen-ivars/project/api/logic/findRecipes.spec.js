import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import { expect } from 'chai'
import random from './helpers/random.js'
import findRecipes from './findRecipes.js'
import { errors } from 'com'
import { User, Recipe } from '../data/models.js'
import { NotFoundError, SystemError } from 'com/errors.js'
const { DuplicityError } = errors
const { ObjectId } = mongoose.Types

describe('findRecipes', () => {
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
		ingredients.push(ingredient1, ingredient2, ingredient3)

		const diet = random.diet()
		const complexity = random.complexity()
		const method = random.method()

		const author = user.id
		await Recipe.create({ author, title, description, image, ingredients, diet, complexity, method })

		let recipes
		try {
			recipes = await findRecipes(user.id, ingredients, diet)
		} catch (error) {
			expect(recipes).to.exist
			expect(recipes).contain(ingredients)
			expect(recipes).contain(diet)
		}


	})

	it('succeds on wrong user', async () => {

		const name = random.name()
		const email = random.email()
		const password = random.password()

		const user = await User.create({ name, email, password })

		const title = random.name()
		const description = random.text()
		const image = random.image()

		const ingredients = []
		const ingredient1 = new ObjectId()
		const ingredient2 = new ObjectId()
		const ingredient3 = new ObjectId()
		ingredients.push(ingredient1, ingredient2, ingredient3)

		const diet = random.diet()
		const complexity = random.complexity()
		const method = random.method()

		await Recipe.create({ author: new ObjectId().toString(), title, description, image, ingredients, diet, complexity, method })

		let recipes
		try {
			recipes = await findRecipes(user.id, ingredients, diet)

		} catch (error) {
			expect(user.id).to.not.exist
			expect(error).to.be.instanceOf(SystemError)
			expect(error).to.be.instanceOf(NotFoundError)
			expect(error.message).to.equal('user not found')
			expect(error.message).to.equal('recipes can not be searched')
		}
	})

	it('search has not results', async () => {

		const name = random.name()
		const email = random.email()
		const password = random.password()

		const user = await User.create({ name, email, password })

		const ingredients = []
		const ingredient1 = new ObjectId()
		const ingredient2 = new ObjectId()
		const ingredient3 = new ObjectId()
		ingredients.push(ingredient1, ingredient2, ingredient3)

		const diet = random.diet()

		let recipes
		try {
			recipes = await findRecipes(user.id, ingredients, diet)

		} catch (error) {
			expect(user.id).to.not.exist
			expect(error).to.be.instanceOf(SystemError)
			expect(error.message).to.equal('user not found')
			expect(error.message).to.equal('user not found')
			expect(findRecipes).to.throw(SystemError)

		}
	})

	after(async () => await mongoose.disconnect())
}) 