
import dotenv from 'dotenv'
dotenv.config()
// primero nos traemos mongoose para conectar los modelos y conectar la base de datos
import mongoose from "mongoose";
// nos traemos los expect de chai
import { expect } from 'chai'
import bcrypt from 'bcryptjs'
import random from './helpers/random.js'
import registerUser from './registerUser.js'
import { errors } from 'com'
import { User } from '../data/models.js'
const { DuplicityError } = errors

describe('registerUser', () => { //describimos el test, le ponemos un título
    before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL)) //es un poco redundante usar async / await aqui, porque el before ya es una promesa
    beforeEach(async () => await User.deleteMany())
    it('succeds on new user', async () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()
        const robot = random.robot()
        await registerUser(name, email, password, robot)

        const user = await User.findOne({ email })
        //comprobamos que realmente el usuario que acabmos de registrar est´en la base de dato

        expect(user).to.exist
        expect(user.name).to.equal(name)
        expect(user.email).to.equal(email)
        expect(user.role).to.equal('user')

        const match = await bcrypt.compare(password, user.password)
        expect(match).to.be.true


        //si se registra bien, devuelve la promesa
    })

    it('fails on already existing user', async () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()
        const robot = random.robot()
        const role = 'user'

        await User.create({ name, email, password, robot, role })

        try {
            await registerUser(name, email, password, robot)
            throw new Error('should not reach this point')

        } catch (error) {
            expect(error).to.be.instanceOf(DuplicityError)
            expect(error.message).to.equal('user already exists')

        }

    })

    after(async () => await mongoose.disconnect()) //así desconecta cuando terminan todos los tests 
})