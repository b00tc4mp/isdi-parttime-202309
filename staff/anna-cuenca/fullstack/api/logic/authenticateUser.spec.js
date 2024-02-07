import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'

import bcrypt from 'bcryptjs'

import random from './helpers/random.js'

import authenticateUser from './authenticateUser.js'
import { errors } from 'com'

import { User } from '../data/models.js'

const { NotFoundError, CredentialsError } = errors

describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on correct credentials', () => {
        // si el expect falla, va a ser un throw, captura el error el it, tiene un catch el propio mocha por dento
        const name = random.name()
        const email = random.email()
        const password = random.password()

        // return User.create({ name, email, password })
        return bcrypt.hash(password, 8)
            .then(hash => User.create({ name, email, password: hash }))

            .then(user => {
                return authenticateUser(email, password)


                    .then(userId => {
                        //compruebo que el id del usuario tenga los parámetros que espero
                        expect(userId).to.be.a('string')
                        expect(userId).to.have.lengthOf(24)
                        expect(userId).to.equal(user.id)
                    }) // si todo va bien, la promesa se ha reset, se ha temrinado, el it se ha esperado y me lo marcará en verde
                // cualquier error que se detecte, como estamos devolviedo la promesa, el it le encadenará 
                // esa promesa a un catch por dentro, lo hace el propio it, el propio mocha, detectará error y nos dará test fallido
            })

    })


    it('fails on wrong email', () => {
        const email = random.email()
        const password = random.password()

        return authenticateUser(email, password)
            //aqui espero que no llegue
            .then(() => { throw new Error('should not reach this point') })
            //espero un error, que llegue aqui
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('User not found')
            })

    })


    it('fails on wrong password', () => {

        const name = random.name()
        const email = random.email()
        const password = random.password()

        return User.create({ name, email, password })

            .then(user => {

                return authenticateUser(email, password + '-wrong')
                    .then(() => { throw new Error('should not reach this point') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(CredentialsError)
                        expect(error.message).to.equal('wrong password')
                    })
            })
    })


    after(() => mongoose.disconnect())
})
