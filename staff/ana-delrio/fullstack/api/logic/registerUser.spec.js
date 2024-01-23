import mongoose from 'mongoose'

import registerUser from './registerUser.js'

import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'
import { expect } from 'chai'
import { User } from '../data/models.js'


describe('registerUser', () => {
    // this is a mocha method that makes you run this before you begin
    before(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))

    beforeEach(() => User.deleteMany())

    it('succeeds on new user', () => {
        return registerUser('Josefa', 'josefa@gmail.com', '123123123')
    })

    it('fails on already existing user', () => {
        return User.create({ name: 'Francesco', email: 'francesco@gmail.com', passowrd: '123123123' })
            .then(() => {
                return registerUser('Francesco', 'francesco@gmail.com', '123123123')
                    .catch(error => {
                        expect(error).to.be.instanceOf(DuplicityError)
                        expect(error.message).to.equal('user already exists')
                    })
            })

    })

    after(() => mongoose.disconnect())

})


