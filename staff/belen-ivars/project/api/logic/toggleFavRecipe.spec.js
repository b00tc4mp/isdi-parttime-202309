import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import toggleFavRecipe from './toggleFavRecipe.js'
import { errors } from 'com'
import { User, Recipe } from '../data/models.js'
import { SystemError } from 'com/errors.js'
const { NotFoundError } = errors
const { ObjectId } = mongoose.Types

describe('toggleFavRecipe', () => {
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

		const ingredients = []
		const ingredient1 = new ObjectId()
		const ingredient2 = new ObjectId()
		const ingredient3 = new ObjectId()
		ingredients.push(ingredient1, ingredient2, ingredient3)

		const diet = random.diet()
		const complexity = random.complexity()
		const method = random.method()

		const recipe = await Recipe.create({ author: user.id, title, description, image, ingredients, diet, complexity, method })

		let recipeFav
		try {
			recipeFav = await toggleFavRecipe(user.id, recipe.id)
		} catch (error) {
			expect(recipeFav).to.exist
			expect(recipe).contain(user.favs)
			expect(error).to.be.instanceOf(SystemError)
			expect(error).to.be.instanceOf(NotFoundError)

		}
	})

	after(async () => await mongoose.disconnect())
})