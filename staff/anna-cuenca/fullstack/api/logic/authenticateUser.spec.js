import mongoose from 'mongoose'
import { expect } from 'chai'

import authenticateUser from './authenticateUser.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'

describe('authenticateUser', () => {
    before(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))

    it('succeeds on correct credentials', done => {
        // debugger
        authenticateUser('coli@flor.com', '123123123', (error, userId) => {
            if (error) {
                done(error)

                return
            }
            try {
                expect(userId).to.be.a('string')
                expect(userId).to.have.lengthOf(24)
                expect(userId).to.equal('659b00eb4e62f914182bb69a')
                done()
            } catch (error) {
                done(error)
            }
        })
    })
    it('fails on wrong email', done => {
        authenticateUser('coli@flor2.com', '123123123', (error, userId) => {
            try {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('User not found')
                expect(userId).to.be.undefined

                done()
            } catch (error) {
                done(error)
            }
        })
    })
    after(() => mongoose.disconnect())
})
