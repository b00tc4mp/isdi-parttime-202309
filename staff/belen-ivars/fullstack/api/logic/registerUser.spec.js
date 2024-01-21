import mongoose from 'mongoose'
import { expect } from 'chai'
import registerUser from './registerUser.js'
import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'
import { User } from '../data/models.js'

describe('registerUser', () => {
	before(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))

	beforeEach(() => User.deleteMany())

	it('succeds on new user', () => {
		return registerUser('Tom Aca', 'tom@aca.com', '123123123')
	})
	it('fails on alreaady existing user', () => {
		return User.create({ name: 'Alber Coc', email: 'alber@coc.com', password: '123123123' })
			.then(() => {
				return registerUser('Alber Coc', 'alber@coc.com', '123123123')
					.catch(error => {
						expect(error).to.be.instanceOf(DuplicityError)
						expect(error.message).to.equal('user already exists')
					})
			})
	})

	after(() => mongoose.disconnect())
})