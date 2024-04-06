import dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'
import { User } from '../data/models.js'
import { errors } from 'com'
const { NotFoundError, CredentialsError } = errors
import changeEmail from './changeEmail.js'

describe('changeEmail', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => { return User.deleteMany() })

    it('should successfully change email', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()
        const newEmail = faker.internet.email()
        const newEmailConfirm = newEmail

        const hash = await bcrypt.hash(password, 7)

        const user = await User.create({ name, email, password: hash })

        await changeEmail(user.id, newEmail, newEmailConfirm, password)

        const userUpdated = await User.findById(user.id)

        expect(userUpdated.email).to.equal(newEmail)
    })

    it('fails on non existing user', async () => {
        const id = '1234567890abcdef12345678'
        const newEmail = faker.internet.email()
        const newEmailConfirm = newEmail
        const password = faker.internet.password()

        try {
            await changeEmail(id, newEmail, newEmailConfirm, password)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('user not found')
        }
    })

    it('fails on wrong password', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = await bcrypt.hash(faker.internet.password(), 7)

        const newEmail = faker.internet.email()
        const newEmailConfirm = newEmail
        const wrongPassword = await bcrypt.hash(faker.internet.password(), 7)

        const user = await User.create({ name, email, password })

        try {
            await changeEmail(user.id, newEmail, newEmailConfirm, wrongPassword)
        } catch (error) {
            expect(error).to.be.instanceOf(CredentialsError)
            expect(error.message).to.equal('wrong password')
        }


    })



    after(() => mongoose.disconnect())
})