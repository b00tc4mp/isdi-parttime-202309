import mongoose from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import changeEmailUser from './changeEmailUser.js'
import { CredentialsError, NotFoundError } from './errors.js'
import { User } from '../data/models.js'

dotenv.config()

describe('changeEmailUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    // CASO POSITIVO - OK
    it('success with change email user', () => {
        return User.create({ name: 'Bruce Wayne', email: 'bruce@wayne.com', password: '123123123' })
            .then(user => {
                return changeEmailUser(user.id, 'soy@batman.com', 'soy@batman.com', '123123123')
            })
            .then(value => {
                expect(value).to.be.undefined
            })
    })

    // CASO NEGATIVO - Not Found
    it('fails on user not found', () => {
        return changeEmailUser('659eb75801ced6e04a9df7a1', 'soy@batman.com', 'soy@batman.com', '123123123')
            .then(() => { throw new Error('should not reach this point!') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    // CASO NEGATIVO - Wrong password
    it('fails on wrong password', () => {
        return User.create({ name: 'Bruce Wayne', email: 'bruce@wayne.com', password: '123123123' })
            .then(user => {
                return changeEmailUser(user.id, 'soy@batman.com', 'soy@batman.com', 'alfred555')
                    .then(() => { throw new Error('should not reach this point') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('wrong credentials')
                    })
            })
    })

    // CASO NEGATIVO - Email's diferents
    it('fails between new email and confirmation', () => {
        return User.create({ name: 'Bruce Wayne', email: 'bruce@wayne.com', password: '123123123' })
            .then(user => {
                return changeEmailUser(user.id, 'soy@batman.com', 'no-soy@batman.com', 'alfred555')
                    .then(() => { throw new Error('should not reach this point') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('new email and confirm are not the same')
                    })
            })
    })

    after(() => mongoose.disconnect())
})