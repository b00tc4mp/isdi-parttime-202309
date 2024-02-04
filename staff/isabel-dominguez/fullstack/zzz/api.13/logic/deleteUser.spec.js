import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import deleteUser from './deleteUser.js'
import { NotFoundError } from './errors.js'
import { User } from '../data/models.js'
import random from './helpers/random.js'

dotenv.config()
const { ObjectId } = Types

describe('deleteUser', () => {

    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on deleting a user', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return deleteUser(user.id)
                    .then(() => User.findById(user.id))
                    .then(deletedUser => {
                        expect(deletedUser).to.be.null
                    })
            })
    })

    it('fails on user not found', () => {

        return deleteUser(new ObjectId().toString())
            .then(() => {
                throw new Error('Should not reach this point')
            })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    after(() => mongoose.disconnect())

})