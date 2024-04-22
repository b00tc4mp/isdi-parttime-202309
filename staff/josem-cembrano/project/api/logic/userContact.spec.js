import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import { expect } from 'chai'

import { faker } from '@faker-js/faker'
import userContact from './userContact.js'
import { User, Contact } from '../data/models.js'
import { errors } from 'com'
const { SystemError } = errors

describe('userContact', () => {
    before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(async () => await User.deleteMany(), async () => await Contact.deleteMany())

    it('create contact', async () => {

        const nameContact = faker.person.fullName()
        const emailContact = faker.internet.email()
        const phoneContact = '123123123'
        const messageContact = faker.lorem.sentence()

        try {
            await userContact(nameContact, emailContact, phoneContact, messageContact)

        } catch (error) {
            console.log(error)
        }
    })

    after(() => mongoose.disconnect())
})