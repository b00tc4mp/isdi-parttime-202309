import mongoose from 'mongoose'

import authenticateUser from './authenticateUser.js'

import { SystemError, NotFoundError, CredentialsError } from './errors.js'
import { expect } from 'chai'
import { User } from '../data/models.js'


describe('authenticateUser', () => {
    before(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))
    // first case

    beforeEach(() => User.deleteMany())

    it('succeeds on correct credentials', () => {
        return User.create({ name, email, password })
            .then(user => {
                return authenticateUser(email, password)
                    .then(userId => {
                        expect(userId).to.be.a('string')
                        expect(userId).to.have.lengthOf(24)
                        expect(userId).to.equal(user.id)
                    })
            })
    })



    // segunda prueba
    it('fails on wrong email', () => {
        return authenticateUser('francesco2@gmail.com', '123123123')
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    // desconectamos de mongo
    after(() => mongoose.disconnect())

})

