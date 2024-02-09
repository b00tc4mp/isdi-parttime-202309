import dotenv from 'dotenv'
dotenv.config()

// primero nos traemos mongoose para conectar los modelos y conectar la base de datos
import mongoose from "mongoose";
// nos traemos los expect de chai
import { expect } from 'chai'

import random from './helpers/random.js'



import registerUser from './registerUser.js'

import { errors } from 'com'

import { User } from '../data/models.js'

const { DuplicityError } = errors

describe('registerUser', () => { //describimos el test, le ponemos un título

    before(() => mongoose.connect(process.env.TEST_MONGODB_URL)) //conecto a la base de datos de test 
    //Nos esperamos a que esta promesa se resuelva, hasta que no se resuelva, no vamos a conectar ningun it
    //before es un método de mocha
    // qué pasa si hay algún error? El error quién lo recoge
    beforeEach(() => User.deleteMany())

    it('succeds on new user', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        return registerUser(name, email, password)
            .then(() => {
                return User.findOne({ email })
                    //comprobamos que realmente el usuario que acabmos de registrar est´en la base de dato
                    .then(user => {
                        expect(user).to.exist
                        expect(user.name).to.equal(name)
                        expect(user.email).to.equal(email)
                        expect(user.password).to.equal(password)
                    })
            })
        //si se registra bien, devuelve la promesa
    })

    it('fails on already existing user', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        return User.create({ name, email, password })
            .then(() => {
                return registerUser(name, email, password)
                    .then(() => { throw new Error('should not reach this point') })
                    //espero que llegue al catch, que me recoja el error
                    .catch(error => {
                        expect(error).to.be.instanceOf(DuplicityError)
                        expect(error.message).to.equal('User already exists')
                    })
            })
    })

    after(() => mongoose.disconnect()) //así desconecta cuando terminan todos los tests 
})

