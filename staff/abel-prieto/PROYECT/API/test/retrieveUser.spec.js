import mongoose, { Types } from 'mongoose'
import dotenv from 'dotenv'
import retrieveUser from '../logic/retrieveUser.js'
import { expect } from 'chai'
import { User } from '../data/models.js'

const { ObjectId } = Types

dotenv.config()

describe('retrieveUser', () => {
    before(() => mongoose.connect(process.env.URL_MONGODB_TEST))

    beforeEach(() => User.deleteMany())

    // POSITIVE CASE
    it('success with retrieve existed user', async () => {
        const user = await User.create({ username: 'Ji Rafa', email: 'ji@rafa.com', password: '123123123', group: ['localhost '] })
        const userRetrieved = await retrieveUser(user.id)

        expect(userRetrieved).to.be.an('Object')
        expect(userRetrieved.username).to.be.equal(user.username)
        expect(userRetrieved.group).to.be.an('array').that.includes.members(user.group)
    })

    // NEGATIVE CASE - User not found
    it('fails on user not found', async () => {
        try {
            await retrieveUser(new ObjectId().toString())
            { throw new Error('should not reach this point!') }
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.be.equal('User not found. Try again')
        }
    })

    after(() => mongoose.disconnect())
})