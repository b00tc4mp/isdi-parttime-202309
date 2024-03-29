// import dotenv from 'dotenv'
// dotenv.config()
// import mongoose from 'mongoose'
// import { expect } from 'chai'
// // import nodemailer from 'nodemailer'
// // import sinon from 'sinon'

// import { faker, it } from '@faker-js/faker'
// import userContact from './userContact.js'
// import { User, Contact } from '../data/models.js'
// import { errors } from 'com'
// const { NotFoundError } = errors

// describe('userContact', () => {
//     before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))

//     beforeEach(async () => await User.deleteMany(), async () => await Contact.deleteMany())

//     it('throws error if no admin found', async () => {
//         const name = faker.person.fullName()
//         const email = faker.internet.email()
//         const password = faker.internet.password()

//         const nameContact = faker.person.fullName()
//         const emailContact = faker.internet.email()
//         const phoneContact = '123123123'
//         const messageContact = faker.lorem.sentence()


//         const admin = await User.create({ Admin: false, name, email, password })
//         const contact = await Contact.create({ name: nameContact, email: emailContact, phone: phoneContact, message: messageContact })

//         try {
//             await userContact(name, email, phoneContact, messageContact)
//             throw new Error('should not get here')
//         } catch (error) {
//             expect(error).to.be.instanceOf(NotFoundError)
//             expect(error.message).to.be.equal('admin not found')
//         }
//     })

//     after(() => mongoose.disconnect())
// })