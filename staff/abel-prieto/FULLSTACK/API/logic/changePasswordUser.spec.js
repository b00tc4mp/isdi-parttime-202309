import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import changePasswordUser from './changePasswordUser.js'
import { CredentialsError, NotFoundError } from './errors.js'
import { User } from '../data/models.js'

dotenv.config()

const { ObjectId } = Types

describe('changePasswordUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    // CASO POSITIVO
    it('succeeds with change user password', () => {
        return User.create({ name: 'Le Chuga', email: 'le@chuga.com', password: '123123123' })
            .then(user => {
                return changePasswordUser(user.id, '123123123', 'verdura10', 'verdura10')
            })
            .then(value => {
                expect(value).to.be.undefined
            })
    })

    // CASO NEGATIVO - Not Found
    it('fails on user not found', () => {
        return changePasswordUser(new ObjectId().toString(), '123123123', 'verdura10', 'verdura10')
            .then(() => { throw new Error('should not reach this point!') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })
        
    // CASO NEGATIVO - Wrong credentials
    it('fails on wrong password', () => {
        return User.create({ name: 'Le Chuga', email: 'le@chuga.com', password: '123123123' })
            .then(user => {
                return changePasswordUser(user.id, '1234', 'verdura10', 'verdura10')
                    .then(() => { throw new Error('should not reach this point!') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('wrong credentials')
                    })
            })
        
    })
    
    // CASO NEGATIVO - Error with confirmation
    it('fails between new password and confirmation', () => {
        return User.create({ name: 'Le Chuga', email: 'le@chuga.com', password: '123123123' })
            .then(user => {
                return changePasswordUser(user.id, '123123123', 'verdura10', 'hortaliza10')
                    .then(() => { throw new Error('should not reach this point!') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('wrong credentials with new password')
                    })
            })
    })


    after(() => mongoose.disconnect())
})