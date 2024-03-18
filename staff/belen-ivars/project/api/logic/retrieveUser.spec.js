import dotenv from 'dotenv'
dotenv.config()

import mongoose, { isObjectIdOrHexString, mongo } from 'mongoose'
import bcrypt from 'bcryptjs'

import { expect } from 'chai'
import random from './helpers/random.js'
import retrieveUser from './retrieveUser.js'
import { errors } from 'com'
import { User } from '../data/models.js'
import { NotFoundError } from 'com/errors.js'
const { DuplicityError } = errors
const { ObjectId } = mongoose.Types

describe('retrieveUser', () => {
	before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))
	beforeEach(async () => await User.deleteMany())

	it('succeds on current user', async () => {

		const name = random.name()
		const email = random.email()
		const password = random.password()

		const user = await User.create({ name, email, password })
		try {
			await retrieveUser(user.id)

		} catch (error) {

			expect(user).to.exist
			expect(user.name).to.equal(name)
			expect(user.email).to.equal(email)
		}


	})

	it('fails on non-existing user', async () => {
		try {
			await retrieveUser(new ObjectId().toString())
			throw new Error('should not reach this point')
		} catch (error) {
			expect(error).to.be.instanceOf(NotFoundError)
			expect(error.message).to.equal('No user found')
		}
	})

	after(async () => await mongoose.disconnect())
}) 