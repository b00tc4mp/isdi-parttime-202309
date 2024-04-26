import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import { expect } from 'chai'
import random from './helpers/random.js'
import checkIngredient from './checkIngredient.js'
import { errors } from 'com'
import { User } from '../data/models.js'
import { NotFoundError, SystemError } from 'com/errors.js'
const { DuplicityError } = errors
const { ObjectId } = mongoose.Types

describe('checkIngredient', () => {
	before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))
	beforeEach(async () => await User.deleteMany())

	it('succeds on current user', async () => {

		const name = random.name()
		const email = random.email()
		const password = random.password()
		const user = await User.create({ name, email, password })

		const ingredient = random.ingredientName().toLowerCase()

		try {
			await checkIngredient(user.id, ingredient)

			expect(true).to.be.true
		} catch (error) {

			expect(error).to.be.an.instanceOf(SystemError)
			expect(ingredient).to.exist
		}
	})
	after(async () => await mongoose.disconnect())
})