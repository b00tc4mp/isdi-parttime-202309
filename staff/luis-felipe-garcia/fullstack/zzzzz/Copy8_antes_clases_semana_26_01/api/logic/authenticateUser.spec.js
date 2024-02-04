import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import authenticateUser from './authenticateUser.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'

import random from '../../../../api/logic/helpers/random.js'
import { User } from '../../../../api/data/models.js'

describe('authenticateUser', () => {

    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))
    beforeEach(() => User.deleteMany())


    it('succeeds on correct credentials', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        return User.create({ name, email, password })
            .then(user => {
                return authenticateUser(email, password)
                    .then(userId => {
                        expect(userId).to.be.a('string')
                        expect(userId).to.have.lengthOf(24)
                        expect(userId).to.equal(user.id)

                    })
            })

    })

    it('wrong mail error', () => {
        const email = random.email()
        const password = random.password()

        return authenticateUser(email, password)
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {

                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    it('fails on wrong password', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        return User.create({ name, email, password })
            .then(user => {
                const passwordWrong = password + '-wrong'
                return authenticateUser(email, passwordWrong)
                    .then(() => { throw new Error('should not reach this point') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('wrong credentials')
                    })
            })
    })

    after(() => mongoose.disconnect())
})

