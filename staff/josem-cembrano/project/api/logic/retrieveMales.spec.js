import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'

import { User, Dog } from '../data/models.js'
import { errors } from 'com'
import retrieveMales from './retrieveMales.js'

const { ObjectId } = mongoose.Types
const { NotFoundError, UnauthorizedError } = errors

describe('retrieveMales', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Dog.deleteMany()]))

    it('should retrieve males for an existing admin user', async () => {
        const name = 'Roy'
        const gender = 'male'

        const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })
        await Dog.create({ author: admin.id, image: faker.image.url(), afix: faker.person.lastName(), name, gender, birthDate: faker.date.past(), puppy: false, text: faker.lorem.sentence() })

        const males = await retrieveMales(admin.id, name, gender)
        expect(males).to.exist
        expect(males).to.be.instanceOf(Array)
        expect(males).to.have.lengthOf(1)
    })

    it('fails when no dogs are found for the admin', async () => {
        try {
            const name = faker.person.firstName()
            const gender = 'male'

            const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })

            const dogs = await retrieveMales(admin.id, name, gender)

            throw new Error('Should not reach this point')
        } catch (error) {
            if (error instanceof NotFoundError) {
                expect(error.message).to.equal('No males found')
            } else {
                throw error
            }
        }
    })

    it('fails when dogs are not males ', async () => {
        try {
            const name = 'Roy'
            const gender = 'female'

            const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })

            await Dog.create({ author: admin.id, image: faker.image.url(), afix: faker.person.lastName(), name, gender, birthDate: faker.date.past(), puppy: false, text: faker.lorem.sentence() })

            const males = await retrieveMales(admin.id, name, gender)

            throw new Error('Should not reach this point')
        } catch (error) {
            if (error instanceof NotFoundError) {
                expect(error.message).to.equal('No males found')
            } else {
                throw error
            }
        }
    })

    after(() => mongoose.disconnect())
})