import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import registerUser from './registerUser.js'
import { errors } from 'com'
const { DuplicityError, TokenError } = errors
import { User } from '../data/models.js'

describe('registerUser', () => {
	before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

	beforeEach(() => User.deleteMany())

	it('succeds on new user', () => {
		const name = random.name()
		const email = random.email()
		const password = random.password()

		return registerUser(name, email, password)
			.then(() => {
				return User.findOne({ email })
					.then(user => {
						expect(user).to.exist
						expect(user.name).to.equal(name)
						expect(user.email).to.equal(email)
						expect(user.password).to.equal(password)

					})
			})

	})

	it('fails on alreaady existing user', () => {
		const name = random.name()
		const email = random.email()
		const password = random.password()

		return User.create({ name, email, password })
			.then(() => {
				return registerUser(name, email, password)
					.then(() => { throw new Error('should not reach this point') })
					.catch(error => {
						expect(error).to.be.instanceOf(DuplicityError)
						expect(error.message).to.equal('user already exists')
					})
			})
	})

	after(() => mongoose.disconnect())
})