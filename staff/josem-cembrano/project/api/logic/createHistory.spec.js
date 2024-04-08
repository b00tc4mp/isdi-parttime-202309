import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'
import { User, History } from '../data/models.js'

import createHistory from './createHistory.js'
import { errors } from 'com'
const { UnauthorizedError, NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('createHistory', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(async () => { User.deleteMany(), History.deleteMany() })

    it('succeds on existing Admin user', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        const image = faker.image.url()
        const text = faker.lorem.words(100)

        const admin = await User.create({ Admin: true, name, email, password })

        await createHistory(admin.id, image, text)

        const history = await History.findOne({ author: admin.id })
        expect(history.image).to.be.equal(image)
        expect(history.text).to.be.equal(text)
    })

    it('fails if user is not an admin', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        const image = faker.image.url()
        const text = faker.lorem.words(100)

        const user = await User.create({ Admin: false, name, email, password })

        try {
            await createHistory(user.id, image, text)

            throw new Error('should not reach this point')

        } catch (error) {
            expect(error).to.be.instanceOf(UnauthorizedError)
            expect(error.message).to.equal('The user does not have permission to perform this action');
        }
    })

    it('fails if user does not exist', async () => {
        const image = faker.image.url()
        const text = faker.lorem.words(100)

        try {

            await createHistory(new ObjectId().toString(), image, text)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('User not found')
        }
    })

    after(() => mongoose.disconnect())
})