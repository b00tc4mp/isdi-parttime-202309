import dotenv from 'dotenv'
dotenv.config()

import bcrypt from 'bcryptjs'

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import changeUserPassword from './changeUserPassword.js'
import { User } from '../data/models.js'

import { errors } from 'com'
const { NotFoundError, ContentError } = errors

describe('changeUserPassword', async () => {
    before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(async () => await User.deleteMany())

    it('succeeds on correct data', async () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()
        const newPassword = random.password()
        const newPasswordConfirm = newPassword

        let hash = await bcrypt.hash(password, 8)

        const user = await User.create({ name, email, password: hash })

        await changeUserPassword(user.id, password, newPassword, newPasswordConfirm)

        const user2 = await User.findById(user.id)

        let match = await bcrypt.compare(newPassword, user2.password)

        expect(match).to.equal(true)
    })

    it('fails on non existing user', async () => {
        const id = random.id()
        const newPassword = random.password()
        const newPasswordConfirm = newPassword
        const password = random.password()

        try {
            await changeUserPassword(id, password, newPassword, newPasswordConfirm)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('user not found')
        }
    })

    it('fails on password and its confirmation not matching', async () => {
        const id = random.id()
        const newPassword = random.password()
        const newPasswordConfirm = random.password()
        const password = random.password()

        try {
            await changeUserPassword(id, password, newPassword, newPasswordConfirm)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(ContentError)
            expect(error.message).to.equal('new password and its confirmation do not match')
        }
    })

    it.skip('fails on wrong password', () => {

    })

    after(() => mongoose.disconnect())
})