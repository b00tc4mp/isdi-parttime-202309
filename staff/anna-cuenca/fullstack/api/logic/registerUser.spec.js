// primero nos traemos mongoose para conectar los modelos y conectar la base de datos
import mongoose from "mongoose";
// nos traemos los expect de chai
import { expect } from 'chai'

import registerUser from './registerUser.js'

import { SystemError, NotFoundError, CredentialsError, DuplicityError } from "./errors.js";

import { User } from '../data/models.js'

describe('registerUser', () => { //describimos el test, le ponemos un título

    before(() => mongoose.connect(process.env.TEST_MONGODB_URL)) //conecto a la base de datos de test 
    //Nos esperamos a que esta promesa se resuelva, hasta que no se resuelva, no vamos a conectar ningun it
    //before es un método de mocha
    // qué pasa si hay algún error? El error quién lo recoge
    beforeEach(() => User.deleteMany())

    it('succeds on new user', () => {
        return registerUser('Pe Pino', 'pe@pino.com', '123123123')
        //si se registra bien, devuelve la promesa
    })

    it('fails on already existing user', () => {
        return User.create({ name: 'Gui Sante', email: 'gui@sante.com', password: '123123123' })
            .then(() => {
                return registerUser('Gui Sante', 'gui@sante.com', '123123123')
                    //espero que llegue al catch, que me recoja el error
                    .catch(error => {
                        expect(error).to.be.instanceOf(DuplicityError)
                        expect(error.message).to.equal('User already exists')
                    })
            })
    })

    after(() => mongoose.disconnect()) //así desconecta cuando terminan todos los tests 
})

