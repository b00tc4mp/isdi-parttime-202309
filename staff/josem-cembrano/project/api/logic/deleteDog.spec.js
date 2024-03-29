import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import { expect } from 'chai'
import { faker } from '@faker-js/faker'
import { User, Dog } from '../data/models.js'
import deleteDog from './deleteDog.js'
import { errors } from 'com'
import sinon from 'sinon'
const { UnauthorizedError, NotFoundError, SystemError } = errors

describe('deleteDog', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(async () => { User.deleteMany(), Dog.deleteMany() })

    it('succeds on existing Admin user', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        const image = faker.image.url()
        const afix = faker.person.lastName()
        const nameDog = 'Roy'
        const gender = faker.person.sexType()
        const birthDate = faker.date.past()
        const puppy = faker.datatype.boolean()
        const text = faker.lorem.sentence()

        const admin = await User.create({ Admin: true, name, email, password })
        const dog = await Dog.create({ author: admin.id, image, afix, name: nameDog, gender, birthDate, puppy, text })

        const remove = await deleteDog(admin.id, dog.id)
        const removed = await Dog.findById(dog.id)

        expect(remove.id).to.be.equal(dog.id)
        expect(removed).to.be.null
    })

    it('fails if user is not an admin', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        const image = faker.image.url()
        const afix = faker.person.lastName()
        const nameDog = 'Roy'
        const gender = faker.person.sexType()
        const birthDate = faker.date.past()
        const puppy = faker.datatype.boolean()
        const text = faker.lorem.sentence()

        const admin = await User.create({ Admin: false, name, email, password })
        const dog = await Dog.create({ author: admin.id, image, afix, name: nameDog, gender, birthDate, puppy, text })

        try {
            await deleteDog(admin.id, dog.id)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(UnauthorizedError)
            expect(error.message).to.equal('the user does not have permission to perform this action')
        }
    })

    it('fails if dog does not exist', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        const admin = await User.create({ Admin: true, name, email, password })

        try {
            await deleteDog(admin.id, '61f87095560179c4c1692041')
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('dog not found')
        }
    })

    it('fail if the dog has not been eliminated', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        const image = faker.image.url()
        const afix = faker.person.lastName()
        const nameDog = 'Roy'
        const gender = faker.person.sexType()
        const birthDate = faker.date.past()
        const puppy = faker.datatype.boolean()
        const text = faker.lorem.sentence()

        const admin = await User.create({ Admin: true, name, email, password })
        const dog = await Dog.create({ author: admin.id, image, afix, name: nameDog, gender, birthDate, puppy, text })

        // con sinon: Simulamos que deleteDog falla, pasamos el nombre del metodo que queremos simular y el objeto, en este caso Dog).
        sinon.stub(Dog, 'findByIdAndDelete').returns(null)

        try {
            await deleteDog(admin.id, dog.id)
        } catch (error) {
            expect(error).to.be.instanceof(SystemError)
            expect(error.message).to.equal('failed to delete dog')
        }

        const existingDog = await Dog.findById(dog.id)
        expect(existingDog).to.not.be.null
    })

    after(() => mongoose.disconnect())
})