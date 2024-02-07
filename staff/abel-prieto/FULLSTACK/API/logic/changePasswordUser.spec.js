import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'

import changePasswordUser from './changePasswordUser.js'
import random from './helpers/random.js'
import { errors } from 'com'
const { CredentialsError, NotFoundError } = errors
import { User } from '../data/models.js'

dotenv.config()

const { ObjectId } = Types

describe('changePasswordUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    // CASO POSITIVO
    it('succeeds with change user password', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()
        const newPassword = random.password()
        const againNewPassword = newPassword

        return bcrypt.hash(password, 8)
            .then(hash => {
                return User.create({ name, email, password: hash })
                    .then(user => {
                        return changePasswordUser(user.id, user.password, newPassword, againNewPassword)
                            .then(value => {
                                expect(value).to.be.undefined

                                return bcrypt.compare(password, user.password)
                                    .then(match => {
                                        expect(match).to.be.true
                                    })
                            })
                    })
            })
    })

    // CASO NEGATIVO - Not Found
    it('fails on user not found', () => {
        const password = random.password()
        const newPassword = random.password()

        return changePasswordUser(new ObjectId().toString(), password, newPassword, newPassword)
            .then(() => { throw new Error('should not reach this point!') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    // CASO NEGATIVO - Wrong credentials
    it('fails on wrong password', () => {
        const wrongPassword = random.password()
        const newPassword = random.password()

        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return changePasswordUser(user.id, wrongPassword, newPassword, newPassword)
                    .then(() => { throw new Error('should not reach this point!') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('wrong credentials')
                    })
            })

    })

    // CASO NEGATIVO - Error with confirmation
    it('fails between new password and confirmation', () => {
        const newPassword = random.password()
        const wrongPassword = random.password()

        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return changePasswordUser(user.id, user.password, newPassword, wrongPassword)
                    .then(() => { throw new Error('should not reach this point!') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('wrong credentials with new password')
                    })
            })
    })


    after(() => mongoose.disconnect())
})