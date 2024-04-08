import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import retrieveRecipes from './retrieveRecipes.js'
import { errors } from 'com'
import { User, Recipe } from '../data/models.js'
import { NotFoundError } from 'com/errors.js'
const { ObjectId } = mongoose.Types

describe('retrieveRecipes', () => {
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
		const author = new ObjectId().toString()

		const recipe = await Recipe.create({ author, title, description, image })

		const title2 = random.name()
		const description2 = random.text()
		const image2 = random.image()
		const author2 = new ObjectId().toString()

		const recipe2 = await Recipe.create({ author: author2, title: title2, description: description2, image: image2 })

		const recipes = [recipe, recipe2]
		try {
			await retrieveRecipes(user.id)
		} catch (error) {
			expect(user).to.exist
			expect(recipes).to.exist
			expect(recipes).to.have.lengthOf(2)
		}
	})

	it('fails on non-existing user', async () => {
		const title = random.name()
		const description = random.text()
		const image = random.image()
		const author = new ObjectId().toString()

		const recipe = await Recipe.create({ author, title, description, image })

		const title2 = random.name()
		const description2 = random.text()
		const image2 = random.image()
		const author2 = new ObjectId().toString()

		const recipe2 = await Recipe.create({ author: author2, title: title2, description: description2, image: image2 })

		const recipes = [recipe, recipe2]

		try {
			await retrieveRecipes(new ObjectId().toString())
			throw new Error('should not reach this point')
		} catch (error) {
			expect(error).to.be.instanceOf(NotFoundError)
			expect(error.message).to.equal('no user found')
		}
	})
	after(async () => await mongoose.disconnect())
})