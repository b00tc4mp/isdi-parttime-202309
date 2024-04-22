import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'
import { User, History } from '../data/models.js'

import modifyHistory from './modifyHistory.js'
import { errors } from 'com'
const { UnauthorizedError, NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('modifyHistory', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(async () => { User.deleteMany(), History.deleteMany() })

    it('succeds on existing Admin user', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        const image = faker.image.url()
        const text = faker.lorem.words(100)

        const newImage = faker.image.url()
        const newText = faker.lorem.words(100)
        

        const admin = await User.create({ Admin: true, name, email, password })

        const createHistory = await History.create({ author: admin.id, image, text })

        await modifyHistory(admin.id, newImage, newText)

        const history = await History.findOne({ author: admin.id })
        expect(history.image).not.to.be.equal(newImage)
        expect(history.text).not.to.be.equal(newText)
    })

    it('fails if user is not an admin', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        const image = faker.image.url()
        const text = faker.lorem.words(100)

        const newImage = faker.image.url()
        const newText = faker.lorem.words(100)
        

        const admin = await User.create({ Admin: false, name, email, password })

        try {
            const createHistory = await History.create({ author: admin.id, image, text })

            await modifyHistory(admin.id, newImage, newText)

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

            await modifyHistory(new ObjectId().toString(), image, text)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('user not found')
        }
    })

    after(() => mongoose.disconnect())
})