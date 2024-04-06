import dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'
import { User } from '../data/models.js'
import { errors } from 'com'
const { NotFoundError, CredentialsError } = errors
import changePassword from './changePassword.js'
const { ObjectId } = mongoose.Types

describe('changePassword', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => { return User.deleteMany() })

    it('should successfully change password', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()
        const newPassword = faker.internet.password()
        const newPasswordConfirm = newPassword
        const hash = await bcrypt.hash(password, 7)

        const user = await User.create({ name, email, password: hash })

        await changePassword(user.id, password, newPassword, newPasswordConfirm)

        const userUpdated = await User.findById(user.id)

        const match = await bcrypt.compare(newPassword, userUpdated.password)

        expect(match).to.be.true
    })

    it('fails on non existing user', async () => {
        const password = faker.internet.password()
        const newPassword = faker.internet.password()
        const newPasswordConfirm = newPassword
        try {
            await changePassword(new ObjectId().toString(), password, newPassword, newPasswordConfirm)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('User not found')
        }
    })

    it('fails on wrong password', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = await bcrypt.hash(faker.internet.password(), 7)

        const newPassword = faker.internet.password()
        const newPasswordConfirm = newPassword
        const wrongPassword = await bcrypt.hash(faker.internet.password(), 7)

        const user = await User.create({ name, email, password })

        try {
            await changePassword(user.id, password, wrongPassword, newPasswordConfirm)
        } catch (error) {
            expect(error).to.be.instanceOf(CredentialsError)
            expect(error.message).to.equal('Wrong credentials')
        }
    })
    after(() => mongoose.disconnect())
})