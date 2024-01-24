import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import changeEmailUser from './changeEmailUser.js'
import random from './helpers/random.js'
import { CredentialsError, NotFoundError } from './errors.js'
import { User } from '../data/models.js'

dotenv.config()
const { ObjectId } = Types

describe('changeEmailUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    // CASO POSITIVO - OK
    it('success with change email user', () => {
        const newEmail = random.email()

        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return changeEmailUser(user.id, newEmail, newEmail, user.password)
                    .then(value => {
                        expect(value).to.be.undefined
                    })
            })
            
    })

    // CASO NEGATIVO - Not Found
    it('fails on user not found', () => {
        const newEmail = random.email()
        const password = random.password()

        return changeEmailUser(new ObjectId().toString(), newEmail, newEmail, password)
            .then(() => { throw new Error('should not reach this point!') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    // CASO NEGATIVO - Wrong password
    it('fails on wrong password', () => {
        const newEmail = random.email()
        const otherPassword = random.password()

        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return changeEmailUser(user.id, newEmail, newEmail, otherPassword)
                    .then(() => { throw new Error('should not reach this point') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('wrong credentials')
                    })
            })
    })

    // CASO NEGATIVO - Email's diferents
    it('fails between new email and confirmation', () => {
        const newEmail = random.email()
        const otherEmail = random.email()

        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return changeEmailUser(user.id, newEmail, otherEmail, user.password)
                    .then(() => { throw new Error('should not reach this point') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('new email and confirm are not the same')
                    })
            })
    })

    after(() => mongoose.disconnect())
})