import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

import { User } from '../data/models.js'
import { expect } from 'chai'
import registerUser from '../logic/registerUser.js'

dotenv.config()

describe('registerUser', () => {
    before(() => mongoose.connect(process.env.URL_MONGODB_TEST))

    beforeEach(() => User.deleteMany())

    // POSITIVE CASE
    it('success on register a new user type', async () => {
        const username = 'Peter'
        const email = 'peter@pan.com'
        const password = '234234234'

        await registerUser(username, email, password)

        const user = await User.findOne({ email })

        expect(user).to.exist
        expect(user.username).to.equal(user.username)
        expect(user.email).to.equal(user.email)

        const match = await bcrypt.compare(password, user.password)

        expect(match).to.be.true
    })

    // NEGATIVE CASE - Duplicity user
    it('fails on user already exist', async () => {
        const user = await User.create({ username: 'Aniki', email: 'drop@hotmail.com', password: '123123123', group: ['localhost'] })

        try {
            await registerUser('Aniki', 'drop@hotmail.com', '123123123')
            { throw new Error('should not reach this point!') }
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('duplicity error')
        }
    })

    after(() => mongoose.disconnect())
})

