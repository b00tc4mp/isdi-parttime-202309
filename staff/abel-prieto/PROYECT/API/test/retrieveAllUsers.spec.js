import mongoose from 'mongoose'
import random from './helpers/random.js'
import dotenv from 'dotenv'
import retrieveAllUsers from '../logic/retrieveAllUsers.js'
import { User } from '../data/models.js'
import { expect } from 'chai'
import { errors } from 'com'
const { NotFoundError, AuthorizationError } = errors

dotenv.config()

describe('retrieveAllUsers', () => {
    before(() => mongoose.connect(process.env.URL_MONGODB_TEST))

    beforeEach(() => User.deleteMany())

    // POSITIVE CASE
    it('success with retrieve ALL users', async () => {
        const admin = await User.create({ username: random.username(), email: random.email(), password: random.password(), group: 'root', role: 'admin' })

        const user1 = await User.create({ username: random.username(), email: random.email(), password: random.password(), group: 'localhost', role: 'user' })
        const user2 = await User.create({ username: random.username(), email: random.email(), password: random.password(), group: 'localhost', role: 'user' })
        const user3 = await User.create({ username: random.username(), email: random.email(), password: random.password(), group: 'localhost', role: 'user' })
        const user4 = await User.create({ username: random.username(), email: random.email(), password: random.password(), group: 'localhost', role: 'user' })

        const allUsers = await retrieveAllUsers(admin.id)

        expect(allUsers).to.be.an('Array').that.has.lengthOf(4)
        expect(allUsers).to.includes(user1.username)
        expect(allUsers).to.includes(user2.username)
        expect(allUsers).to.includes(user3.username)
        expect(allUsers).to.includes(user4.username)
    })

    // NEGATIVE CASE - Admin not found
    it('fails on admin not found', async () => {
        const userRequest = random.id()

        try {
            await retrieveAllUsers(userRequest)
            throw new Error('should not reach this point!')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.be.equal('Admin not found. Try again')
        }
    })

    // NEGATIVE CASE - Authorization denied
    it('fails on admin not found', async () => {
        const userRequest = await User.create({ username: random.username(), email: random.email(), password: random.password(), group: 'localhost', role: 'user' })

        try {
            await retrieveAllUsers(userRequest.id)
            throw new Error('should not reach this point!')
        } catch (error) {
            expect(error).to.be.instanceOf(AuthorizationError)
            expect(error.message).to.be.equal('Authorization denied. Only ADMIN user')
        }
    })

    after(() => mongoose.disconnect())
})