import dotenv from 'dotenv'
dotenv.config()

import mongoose, { mongo } from 'mongoose'

import { expect } from 'chai'
import random from './helpers/random.js'
import deleteRecipe from './deleteRecipe.js'
import { errors } from 'com'
import { User, Recipe } from '../data/models.js'
import { NotFoundError } from 'com/errors.js'
const { ObjectId } = mongoose.Types
const { DuplicityError } = errors

describe('deleteRecipe', () => {
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
		const author = user.id
		const recipe = await Recipe.create({ author, title, description, image })


		await deleteRecipe(user.id, recipe.id)

		const deletedRecipe = await Recipe.findById(recipe.id)

		expect(deletedRecipe).not.exist


	})

	it('fails on non existing user', async () => {

		const title = random.name()
		const description = random.text()
		const image = random.image()
		const author = new ObjectId().toString()
		const recipe = await Recipe.create({ author, title, description, image })

		try {
			await deleteRecipe(recipe.id, new ObjectId().toString())
			throw new Error('should not reach this point')
		} catch (error) {
			expect(error).to.be.instanceOf(NotFoundError)
			expect(error.message).to.equal('user not found')
		}
	})

	it('fails on non author user', async () => {

		const name = random.name()
		const email = random.email()
		const password = random.password()
		const user = await User.create({ name, email, password })

		const title = random.name()
		const description = random.text()
		const image = random.image()
		const author = new ObjectId().toString()
		const recipe = await Recipe.create({ author, title, description, image })

		try {
			await deleteRecipe(user.id, recipe.id)
			throw new Error('should not reach this point')
		} catch (error) {
			expect(error).to.be.instanceOf(NotFoundError)
			expect(error.message).to.equal('recipe does not belong to that user')
		}
	})


	after(async () => await mongoose.disconnect())
})