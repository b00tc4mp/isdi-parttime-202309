import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'

import retrieveHistory from './retrieveHistory.js'
import { User, History } from '../data/models.js'
import { errors } from 'com'

const { NotFoundError } = errors

describe('retrieveHistory', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), History.deleteMany()]))

    it('should retrieve history for an existing admin user', async () => {
        const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })
        await History.create({ author: admin.id, image: faker.image.url(), text: faker.lorem.sentence() })

        const history = await retrieveHistory(admin.id)
        expect(history).to.exist
        expect(history).to.be.instanceOf(Array)
        expect(history).to.have.lengthOf(1)
    })

    it('fails when no history are found for the admin', async () => {
        try {
            const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })

            const history = await retrieveHistory(admin.id)

            throw new Error('Should not reach this point')
        } catch (error) {
            if (error instanceof NotFoundError) {
                expect(error.message).to.equal('history not found')
            } else {
                throw error
            }
        }
    })


    after(() => mongoose.disconnect())
})