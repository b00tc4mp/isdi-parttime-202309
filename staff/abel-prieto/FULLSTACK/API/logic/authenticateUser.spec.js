import mongoose from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import authenticateUser from './authenticateUser.js'
import random from './helpers/random.js'
import { CredentialsError, NotFoundError } from './errors.js'
import { User } from '../data/models.js'

dotenv.config()

describe('authenticateUser', () => {
    // Usamos describe() para inicializar la prueba testing con MOCHA
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))  // CONTECTAMOS MONGOOSE

    beforeEach(() => User.deleteMany())

    // CASO POSITIVO
    it('succeeds on correct credentials', () => {
        const name = random.name()
        const email = random.email() 
        const password = random.password() 

        return User.create({ name, email, password })
            .then(user => {
                return authenticateUser(user.email, user.password)
                    .then(userId => {
                        expect(userId).to.be.a('string')         // Que SEA un String
                        expect(userId).to.have.lengthOf(24)      // Que TENGA 24 caracteres
                        expect(userId).to.equal(user.id)         // Que sea IGUAL al id del user
                    })
            })
    })

    // CASO NEGATIVO - EMAIL
    it('fails on wrong email', () => {
        const email = random.email() 
        const password = random.password() 

        return authenticateUser( email, password) 
            .then(() => { throw new Error('should not reach this point!') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)     // Que SEA un error del tipo NotFoundError
                expect(error.message).to.equal('user not found')  // Que SEA un error igual a 'user not found'
            })
    })

    // CASO NEGATIVO - PASSWORD
    it('fails on wrong password', () => {
        const name = random.name()
        const email = random.email() 
        const password = random.password()

        return User.create({ name, email, password })
            .then(user => {
                return authenticateUser(user.email, '1234')
                    .then(() => { throw new Error('shoul not reach this point!')})
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)     // Que SEA un error del tipo CredentialsError
                        expect(error.message).to.equal('wrong credentials')  // Que SEA un error igual a 'wrong credentials'
                    })
            })
    })

    after(() => mongoose.disconnect())  // DESCONECTAMOS MONGOOSE
})