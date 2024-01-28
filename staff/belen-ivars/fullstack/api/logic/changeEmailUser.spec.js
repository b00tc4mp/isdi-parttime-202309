import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import changeEmailUser from './changeEmailUser.js'
import { CredentialsError, DuplicityError, NotFoundError } from './errors.js'
import { User } from '../data/models.js'

const { ObjectId } = mongoose.Types

describe('changeEmailUser', () => {
	before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

	beforeEach(() => User.deleteMany())

	it('succeds on existing user', () => {
		const newEmail = random.email()

		return User.create({ name: random.name(), email: random.email(), password: random.password() })
			.then(user => {
				return changeEmailUser(user.id, user.email, newEmail, newEmail, user.password)
					.then(value => expect(value).to.be.undefined)
			})
	})

	it('fails on non-existing user', () => {
		const newEmail = random.email()
		const password = random.password()

		return changeEmailUser(new ObjectId().toString(), newEmail, newEmail, newEmail, password)
			.then(() => { throw new Error('should not reach this point') })
			.catch(error => {
				expect(error).to.be.instanceOf(NotFoundError)
				expect(error.message).to.equal('user not found')
			})
	})

	it('fails on new email confirm', () => {
		const newEmail = random.email()
		const newEmail2 = random.email()

		return User.create({ name: random.name(), email: random.email(), password: random.password() })
			.then(user => {
				return changeEmailUser(user.id, user.email, newEmail, newEmail2, user.password)
					.then(() => { throw new Error('should not reach this point') })
					.catch(error => {
						expect(error).to.be.instanceOf(CredentialsError)
						expect(error.message).to.equal('new email and confirm does not match')
					})
			})
	})

	it('fails on wrong password', () => {
		const newEmail = random.email()
		const password2 = random.password()

		return User.create({ name: random.name(), email: random.email(), password: random.password() })
			.then(user => {
				return changeEmailUser(user.id, user.email, newEmail, newEmail, password2)
					.then(() => { throw new Error('should not reach this point') })
					.catch(error => {
						expect(error).to.be.instanceOf(CredentialsError)
						expect(error.message).to.equal('wrong credentials')
					})
			})
	})

	after(() => mongoose.disconnect())
})