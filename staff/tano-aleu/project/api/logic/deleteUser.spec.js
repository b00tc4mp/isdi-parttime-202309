import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'

import random from './helpers/random.js'
import deleteUser from './deleteUser.js' // Asegúrate de tener esta función implementada
import { User } from '../data/models.js'

import { errors } from 'com'
const { NotFoundError } = errors

describe('deleteUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on existing user', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        return User.create({ name, email, password })
            .then(user => {
                expect(user).to.exist

                return deleteUser(user.id)
                    .then(() => {
                        return User.findById(user.id)
                            .then(user => {
                                expect(user).to.be.null
                            })
                    })
            })
    })

    it('fails on non-existing user', () => {
        const id = random.id()

        return deleteUser(id)
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    after(() => mongoose.disconnect())
})
