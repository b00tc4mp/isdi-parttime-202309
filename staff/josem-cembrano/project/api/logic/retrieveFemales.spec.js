import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'

import { User, Dog } from '../data/models.js'
import { errors } from 'com'
import retrieveFemales from './retrieveFemales.js'

const { NotFoundError } = errors

describe('retrieveFemales', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Dog.deleteMany()]))

    it('should retrieve females for an existing admin user', async () => {
        const name = 'Roy'
        const gender = 'female'

        const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })
        await Dog.create({ author: admin.id, image: faker.image.url(), afix: faker.person.lastName(), name, gender, birthDate: faker.date.past(), puppy: false, text: faker.lorem.sentence() })

        const females = await retrieveFemales(admin.id, name, gender)
        expect(females).to.exist
        expect(females).to.be.instanceOf(Array)
        expect(females).to.have.lengthOf(1)
    })

    it('fails when no dogs are found for the admin', async () => {
        try {
            const name = faker.person.firstName()
            const gender = 'female'

            const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })

            const dogs = await retrieveFemales(admin.id, name, gender)

            throw new Error('Should not reach this point')
        } catch (error) {
            if (error instanceof NotFoundError) {
                expect(error.message).to.equal('No females found')
            } else {
                throw error
            }
        }
    })

    it('fails when dogs are not males ', async () => {
        try {
            const name = 'Roy'
            const gender = 'male'

            const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })

            await Dog.create({ author: admin.id, image: faker.image.url(), afix: faker.person.lastName(), name, gender, birthDate: faker.date.past(), puppy: false, text: faker.lorem.sentence() })

            const females = await retrieveFemales(admin.id, name, gender)

            throw new Error('Should not reach this point')
        } catch (error) {
            if (error instanceof NotFoundError) {
                expect(error.message).to.equal('No females found')
            } else {
                throw error
            }
        }
    })

    after(() => mongoose.disconnect())
})