import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import changePasswordUser from './changePasswordUser.js'
import { CredentialsError, DuplicityError, NotFoundError } from './errors.js'
import { User } from '../data/models.js'

const { ObjectId } = mongoose.Types

describe('changePasswordUser', () => {
	before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

	beforeEach(() => User.deleteMany())

	it('succeds on existing user', () => {
		const newPassword = random.password()

		return User.create({ name: random.name(), email: random.email(), password: random.password() })
			.then(user => {
				return changePasswordUser(user.id, user.password, newPassword, newPassword)
					.then(value => expect(value).to.be.undefined)
			})
	})

	it('fails on non-existing user', () => {
		const password = random.password()
		const password2 = random.password()

		return changePasswordUser(new ObjectId().toString(), password, password2, password2)
			.then(() => { throw new Error('should not reach this point') })
			.catch(error => {
				expect(error).to.be.instanceOf(NotFoundError)
				expect(error.message).to.equal('user not found')
			})
	})

	it('fails on new password confirm', () => {
		const password = random.password()
		const password2 = random.password()

		return User.create({ name: random.name(), email: random.email(), password: random.password() })
			.then(user => {
				return changePasswordUser(user.id, user.password, password, password2)
					.then(() => { throw new Error('should not reach this point') })
					.catch(error => {
						expect(error).to.be.instanceOf(CredentialsError)
						expect(error.message).to.equal('new password and confirm does not match')
					})
			})
	})

	it('fails on wrong credentials', () => {
		const password = random.password()
		const password2 = random.password()


		return User.create({ name: random.name(), email: random.email(), password: random.password() })
			.then(user => {
				return changePasswordUser(user.id, password, password2, password2)
					.then(() => { throw new Error('should not reach this point') })
					.catch(error => {
						expect(error).to.be.instanceOf(CredentialsError)
						expect(error.message).to.equal('wrong credentials')
					})
			})
	})

	after(() => mongoose.disconnect())
})