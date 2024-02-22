import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import { expect } from 'chai'
import bcrypt from 'bcryptjs'
import authenticateAdmin from './authenticateAdmin.js'
import { errors } from 'com'
import { Admin } from '../data/models.js'
import random from './helpers/random.js'

const { CredentialsError, NotFoundError } = errors

describe('authenticateAdmin', () => {
    before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(async () => await Admin.deleteMany())

    it('succeds on correct credentials', async () => {
        const email = random.email()
        const password = random.password()

        const hash = await bcrypt.hash(password, 8)
        const admin = await Admin.create({ email, password: hash })

        const adminId = await authenticateAdmin(email, password)

        expect(adminId).to.be.a('string')
        expect(adminId).to.have.lengthOf(24)
        expect(adminId).to.equal(admin.id)

    })

    it('fails on wrong email', async () => {
        const email = random.email()
        const password = random.password()

        try {
            await authenticateAdmin(email, password)

            throw new Error('you should not see this message')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('admin not found')
        }
    })

    it('fails on wrong password', async () => {
        const email = random.email()
        const password = random.password()

        await Admin.create({ email, password })

        try {
            await authenticateAdmin(email, password + '-TEST')

            throw new Error('you should not see this message')
        } catch (error) {
            expect(error).to.be.instanceOf(CredentialsError)
            expect(error.message).to.equal('wrong password')
        }
    })

    after(async () => await mongoose.disconnect())
})