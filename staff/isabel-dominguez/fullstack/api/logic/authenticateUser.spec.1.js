import mongoose from 'mongoose'
import { expect } from 'chai'

import authenticateUser from './authenticateUser.js'
import { User } from '../data/models.js'

import { errors } from 'com'
const { SystemError, NotFoundError, CredentialsError, DuplicityError } = errors

describe('authenticateUser', () => {
    before(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))

    beforeEach(() => User.deleteMany())

    it('succeeds on correct credentials', () => {
        return User.create({ name: 'Le Chuga', email: 'le@chuga.com', password: '123123123' })
            .then(user => {
                // Intentando autenticar al usuario recién creado
                return authenticateUser('le@chuga.com', '123123123')
                    .then(userId => {
                        // Verificando que el userId sea una cadena de texto
                        expect(userId).to.be.a('string')
                        // Verificando que la longitud del userId sea 24 (id de MongoDB)
                        expect(userId).to.have.lengthOf(24)
                        // Verificando que el userId coincida con el id del usuario creado
                        expect(userId).to.equal(user.id)
                    })
            })
    })

    it('fails on wrong email', () => {
        return authenticateUser('le@chuga2.com', '123123123')
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                // Verificando que el error capturado sea una instancia de NotFoundError
                expect(error).to.be.instanceOf(NotFoundError)
                // Verificando que el mensaje de error coincida con el mensaje esperado
                expect(error.message).to.equal('user not found')
            })
    })

    after(() => mongoose.disconnect())
})