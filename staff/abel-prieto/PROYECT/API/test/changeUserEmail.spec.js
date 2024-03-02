import mongoose, { Types } from 'mongoose'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import expect from 'mocha'
import changeUserEmail from '../logic/changeUserEmail.js'
import { errors } from 'com'
import { User } from '../data/models.js'
const { ObjectId } = Types
const { NotFoundError, CredentialsError } = errors

dotenv.config()

describe('changeUserEmail', () => {
    before(() => mongoose.connect(process.env.URL_MONGODB_TEST))

    beforeEach(() => User.deleteMany())

    // POSTIVE CASE
    it('success with changing email user', async () => {
        const username = new ObjectId().toString()
        const email = 'email@email.com'
        const password = new ObjectId().toString()
        const againNewPassword = password

        const newEmail = 'random@random.com'

        const hash = await bcrypt.hash(password, 5)

        const user = await User.create({ username, email, password: hash, group: 'localhost', role: 'user' })
        const userChanged = await changeUserEmail(user.id, newEmail, password, againNewPassword)

        expect(userChanged).to.be.undefined

    })

    after(() => mongoose.disconnect())
})