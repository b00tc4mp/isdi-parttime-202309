import dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import { expect } from "chai"
import { faker } from "@faker-js/faker"
import registerUser from "./registerUser.js"
import { User } from "../data/models.js"
import { errors } from "com"

const { DuplicityError } = errors

describe("registerUser", () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => { return User.deleteMany() })

    it("should successfully register a new user", async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        await registerUser(name, email, password)

        const user = await User.findOne({ email: email })

        expect(user).to.exist

        const match = await bcrypt.compare(password, user.password)
        expect(match).to.be.true

        expect(user.name).to.equal(name)
        expect(user.email).to.equal(email)
        expect(user.password).to.not.equal(password)

    })

    it('fails on already existing user', async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        await User.create({ name, email, password })

        try {
            await registerUser(name, email, password)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(DuplicityError)
            expect(error.message).to.equal('user already exists')
        }
    })

    it("should set Admin to true for first registered user", async () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        await registerUser(name, email, password)

        const user = await User.findOne({ email: email })

        expect(user.Admin).to.be.true
    })

    it('should set Admin to false after first user', async () => {
        const user1 = await registerUser(
            faker.person.firstName(),
            faker.internet.email(),
            faker.internet.password()
        )
        expect(user1.Admin).to.be.true

        const user2 = await registerUser(
            faker.person.firstName(),
            faker.internet.email(),
            faker.internet.password()
        )
        expect(user2.Admin).to.be.false

    })

    after(async () => await mongoose.disconnect())
})
