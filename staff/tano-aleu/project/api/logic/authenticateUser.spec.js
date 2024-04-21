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

describe('authenticateUser', () => {//describimos el test, le ponemos un titulo
    before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))
    //es un poco redundante usar async/await aqui, porque el before ya es una promesa

    beforeEach(async () => await User.deleteMany())

    it('succeds on correct cerdentials', async () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        const hash = await bcrypt.hash(password, 8)
        const user = await User.create({ name, email, password: hash })

        const userId = await authenticateUser(email, password)

        expect(userId).to.be.a('string')
        expect(userId).to.have.lengthOf(24)
        expect(userId).to.equal(user.id)

        //si se autentica bien, devuelve la promesa

    })

    it('fails on wrong email', async () => {
        const email = random.email()
        const password = random.password()

        try {
            await authenticateUser(email, password)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('user not found')
        }
    })

    it('fails on wrong password', async () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        const user = await User.create({ name, email, password })

        try {
            await authenticateUser(email, password + '-wrong')

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(CredentialsError)
            expect(error.message).to.equal('wrong password')
        }
    })


    it('succeeds with correct credentials and email case insensitive', async () => {
        const name = random.name();
        const email = random.email().toLowerCase(); // Asegura que el email está en minúsculas
        const password = random.password();

        const hash = await bcrypt.hash(password, 8);
        const user = await User.create({ name, email, password: hash }); // Define user aquí

        const userId = await authenticateUser(email.toUpperCase(), password); // Prueba con el email en mayúsculas

        expect(userId).to.be.a('string');
        expect(userId).to.equal(user.id); // Ahora user está definido en este ámbito
    });



    after(async () => await mongoose.disconnect())
    //asi desconecta cuando terminan los test
})