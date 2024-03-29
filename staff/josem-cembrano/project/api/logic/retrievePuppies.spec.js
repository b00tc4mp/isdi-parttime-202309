import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'

import { User, Dog } from '../data/models.js'
import { errors } from 'com'
import retrievePuppies from './retrievePuppies.js'

const { ObjectId } = mongoose.Types
const { NotFoundError, UnauthorizedError } = errors

describe('retrievePuppies', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Dog.deleteMany()]))

    it('should retrieve puppies for an existing admin user', async () => {
        const name = 'Roy'
        const puppy = true

        const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })
        await Dog.create({ author: admin.id, image: faker.image.url(), afix: faker.person.lastName(), name, gender: faker.person.sexType(), birthDate: faker.date.past(), puppy, text: faker.lorem.sentence() })

        const puppies = await retrievePuppies(admin.id, name, puppy)
        expect(puppies).to.exist
        expect(puppies).to.be.instanceOf(Array)
        expect(puppies).to.have.lengthOf(1)
    })

    it('should not retrieve puppies for a non-admin user', async () => {
        const name = faker.person.firstName()
        const puppy = faker.datatype.boolean(false)

        const nonAdminUser = await User.create({ Admin: false, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })

        try {
            await retrievePuppies(nonAdminUser.id, name, false)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(UnauthorizedError)
            expect(error.message).to.equal('The user does not have permission to perform this action')
        }
    })

    it('fails on non-existing user', async () => {
        try {
            const name = faker.person.firstName()
            const puppy = faker.datatype.boolean(false)

            const nonExistingUserId = new ObjectId().toString()
            const puppies = await retrievePuppies(nonExistingUserId, name, false)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('user not found')
        }
    })

    it('fails when no dogs are found for the admin', async () => {
        try {
            const name = faker.person.firstName()
            const puppy = faker.datatype.boolean(true)

            const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })

            const dogs = await retrievePuppies(admin.id, name, true)

            throw new Error('Should not reach this point')
        } catch (error) {
            if (error instanceof NotFoundError) {
                expect(error.message).to.equal('No puppies found')
            } else {
                throw error
            }
        }
    })

    it('fails when dogs do not have names', async () => {
        try {
            const name = 'Roy'
            const wrongName = 'Wrong'
            const puppy = true

            const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })

            await Dog.create({ author: admin.id, image: faker.image.url(), afix: faker.person.lastName(), name, gender: faker.person.sexType(), birthDate: faker.date.past(), puppy, text: faker.lorem.sentence() })

            const puppies = await retrievePuppies(admin.id, wrongName, true)

            throw new Error('Should not reach this point')
        } catch (error) {
            if (error instanceof NotFoundError) {
                expect(error.message).to.equal('No puppies found')
            } else {
                throw error
            }
        }
    })

    it('fails when dogs are not puppies ', async () => {
        try {
            const name = 'Roy'
            const puppy = false

            const admin = await User.create({ Admin: true, name: faker.person.fullName(), email: faker.internet.email(), password: faker.internet.password() })

            await Dog.create({ author: admin.id, image: faker.image.url(), afix: faker.person.lastName(), name, gender: faker.person.sexType(), birthDate: faker.date.past(), puppy, text: faker.lorem.sentence() })

            const puppies = await retrievePuppies(admin.id, name, puppy)

            throw new Error('Should not reach this point')
        } catch (error) {
            if (error instanceof NotFoundError) {
                expect(error.message).to.equal('puppy must be true')
            } else {
                throw error
            }
        }
    })

    after(() => mongoose.disconnect())
})