import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'

import retrieveDogs from './retrieveDogs.js'
import { User, Dog } from '../data/models.js'
import { errors } from 'com'

const { ObjectId } = mongoose.Types
const { NotFoundError, UnauthorizedError } = errors

describe('retrieveDogs', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Dog.deleteMany()]))

    it('should retrieve dogs for an existing admin user', async () => {
        const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })
        await Dog.create({ author: admin.id, image: faker.image.url(), afix: faker.person.lastName(), name: faker.person.fullName(), gender: faker.person.sexType(), birthDate: faker.date.past(), puppy: faker.datatype.boolean(), text: faker.lorem.sentence() })

        const dogs = await retrieveDogs(admin.id)
        expect(dogs).to.exist
        expect(dogs).to.be.instanceOf(Array)
        expect(dogs).to.have.lengthOf(1)
    })

    it('fails when no dogs are found for the admin', async () => {
        try {
            const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })

            const dogs = await retrieveDogs(admin.id)

            throw new Error('Should not reach this point')
        } catch (error) {
            if (error instanceof NotFoundError) {
                expect(error.message).to.equal('dogs not found')
            } else {
                throw error
            }
        }
    })


    after(() => mongoose.disconnect())
})
