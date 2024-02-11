import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'
import changeUserPassword from './changeUserPassword.js'
import random from './helpers/random.js'
import { User } from '../data/models.js'

import { errors } from 'com'
const { SystemError, NotFoundError, CredentialsError, DuplicityError } = errors

dotenv.config()
const { ObjectId } = Types

describe('changeUserPassword', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds with change user password', () => {
        const newPass = random.password()

        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return changeUserPassword(user.id, user.password, newPass, newPass)
                    .then(value => expect(value).to.be.undefined)
            })
    })

    it('fails on user not found', () => {
        const password = random.password()
        const newPass = random.password()

        return changeUserPassword(new ObjectId().toString(), password, newPass, newPass)
            .then(() => { throw new Error('should not reach this point!') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    it('fails on wrong pass', () => {
        const wrongPass = random.password()
        const newPass = random.password()

        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return changeUserPassword(user.id, wrongPass, newPass, newPass)
                    .then(() => { throw new Error('should not reach this point!') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('wrong credentials')
                    })
            })

    })

    it('fails between new pass and confirm pass', () => {
        const newPass = random.password()
        const wrongPass = random.password()

        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return changeUserPassword(user.id, user.password, newPass, wrongPass)
                    .then(() => { throw new Error('should not reach this point!') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('wrong credentials with confirm new password')
                    })
            })
    })


    after(() => mongoose.disconnect())
})