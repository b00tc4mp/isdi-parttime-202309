import dotenv from 'dotenv'
dotenv.config()

import mongoose, { mongo } from 'mongoose'

import { expect } from 'chai'
import bcrypt from 'bcryptjs'
import random from './helpers/random.js'
import createRecipe from './createRecipe.js'
import { errors } from 'com'
import { User, Recipe } from '../data/models.js'
import { NotFoundError } from 'com/errors.js'
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
		const author = user.id

		let recipe
		try {
			recipe = await createRecipe(author, title, description, image)
		} catch (error) {
			expect(recipe).to.exist
			expect(recipe.title).to.equal(title)
			expect(recipe.image).to.equal(image)
			expect(recipe.description).to.equal(description)
			expect(author).to.equal(user.id)
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