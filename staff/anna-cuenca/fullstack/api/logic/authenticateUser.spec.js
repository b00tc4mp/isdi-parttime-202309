import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'

import authenticateUser from './authenticateUser.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'
import { User } from '../data/models.js'

describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on correct credentials', () => {
        // si el expect falla, va a ser un throw, captura el error el it, tiene un catch el propio mocha por dento
        return User.create({ name: 'Le Chuga', email: 'le@chuga.com', password: '123123123' })
            //caso positivo, crea usuario
            .then(user => {
                return authenticateUser('le@chuga.com', '123123123')
                    //caso possitivo, devuelve el id del usuario
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
        return authenticateUser('le@chuga2.com', '123123123')
            //aqui espero que no llegue
            .then(() => { throw new Error('should not reach this point') })
            //espero un error, que llegue aqui
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('User not found')
            })

    })


    it('fails on wrong password', () => {

        return User.create({ name: 'San Dia', email: 'san@dia.com', password: '123123123' })
            .then(() => {

                return authenticateUser('san@dia.com', '123123124')
            })
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(CredentialsError);
                expect(error.message).to.equal('wrong password');
            });
    });


    after(() => mongoose.disconnect())
})
