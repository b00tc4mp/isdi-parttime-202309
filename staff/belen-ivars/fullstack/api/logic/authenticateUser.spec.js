import mongoose from 'mongoose'
import { expect } from 'chai'
import authenticateUser from './authenticateUser.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'

describe('authenticateUser', () => {
	before(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))


	it('succeeds on correct credentials', done => {
		authenticateUser('peter@pan.com', '123123123', (error, userId) => {

			if (error) {
				done(error)
				return
			}
			try {

				expect(userId).to.be.a('string')
				expect(userId).to.have.lengthOf(24)
				expect(userId).to.equal('659abc140e890e8a7a2ddaa4')

				done()
			} catch (error) {
				done(error)
			}
		})
	})

	it('fails on wrong email', done => {
		// debugger
		authenticateUser('peter2@pan.com', '123123123', (error, userId) => {

			try {
				expect(error).to.be.instanceOf(NotFoundError)
				expect(error.message).to.equal('user not found')
				expect(userId).to.be.undefined

				done()
			} catch (error) {
				done(error)
			}
		})
	})

	after(() => mongoose.disconnect())
})