import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import retrieveUser from './retrieveUser.js'
import random from './helpers/random.js'
import { NotFoundError } from './errors.js'
import { User } from '../data/models.js'

const { ObjectId } = Types

dotenv.config()

describe('retrieveUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    // CASO POSITIVO
    it('success with retrieve user', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password() 

        return User.create({ name, email, password })
            .then(user => {
                return retrieveUser(user.id)
                    .then(user1 => {
                        expect(user1.name).to.be.a('string')
                        expect(user1.name).to.equal(user.name)
                        expect(user1.id).to.be.undefined
                        expect(user1.email).to.be.undefined
                        expect(user1.password).to.be.undefined
                    })
            })
    })

    // CASO NEGATIVO - Not Found
    it('fails on user not found', () => {
        return retrieveUser(new ObjectId().toString())
            .then(() => { throw new Error('should not reach this point!') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    after(() => mongoose.disconnect())
})