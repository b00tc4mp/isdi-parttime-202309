import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'
import { User, Dog } from '../data/models.js'

import createDog from './createDog.js'
import { errors } from 'com'
const { UnauthorizedError, NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('createDog', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(async () => {
        User.deleteMany()
        Dog.deleteMany()
    })

    it('succeds on existing Admin user', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        const image = faker.image.url()
        const afix = faker.person.lastName()
        const nameDog = faker.person.fullName()
        const gender = faker.person.sexType()
        const puppy = faker.datatype.boolean()
        const text = faker.lorem.sentence()
        const birthDate = '01/01/1990'

        const admin = await User.create({ Admin: true, name, email, password })

        await createDog(admin.id, image, afix, nameDog, gender, birthDate, puppy, text)

        const photo = await Dog.findOne({ author: admin.id })
        expect(photo.image).to.be.equal(image)
        expect(photo.afix).to.be.equal(afix)
        expect(photo.name).to.be.equal(nameDog)
        expect(photo.gender).to.be.equal(gender)
        expect(photo.birthDate).to.be.equal(birthDate)
        expect(photo.puppy).to.be.equal(puppy)
        expect(photo.text).to.be.equal(text)
    })

    it('fails if user is not an admin', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        const image = faker.image.url()
        const afix = faker.person.lastName()
        const nameDog = faker.person.fullName()
        const gender = faker.person.sexType()
        const birthDate = '1990-01-01'
        const puppy = faker.datatype.boolean()
        const text = faker.lorem.sentence()

        const user = await User.create({ Admin: false, name, email, password })

        try {
            await createDog(user.id, image, afix, nameDog, gender, birthDate, puppy, text)

            throw new Error('should not reach this point')

        } catch (error) {
            expect(error).to.be.instanceOf(UnauthorizedError)
            expect(error.message).to.equal('The user does not have permission to perform this action');
        }
    })

    it('fails if user does not exist', async () => {
        const image = faker.image.url()
        const afix = faker.person.lastName()
        const nameDog = faker.person.fullName()
        const gender = faker.person.sexType()
        const birthDate = '01/01/1990'
        const puppy = faker.datatype.boolean()
        const text = faker.lorem.sentence()

        try {

            await createDog(new ObjectId().toString(), image, afix, nameDog, gender, birthDate, puppy, text)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('User not found')
        }
    })

    after(() => mongoose.disconnect())
})