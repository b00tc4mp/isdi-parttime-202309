import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import bcrypt from 'bcryptjs'

import changeUserEmail from './changeUserEmail.js'
import { User } from '../data/models.js'

import { errors } from 'com'
import { CredentialsError } from 'com/errors.js'
const { NotFoundError, ContentError } = errors

describe('changeUserEmail', async () => {
    before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(async () => await User.deleteMany())

    it('succeeds on correct data', async () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()
        const newEmail = random.email()
        const newEmailConfirm = newEmail

        let hash = await bcrypt.hash(password, 8)

        const user = await User.create({ name, email, password: hash })

        await changeUserEmail(user.id, newEmail, newEmailConfirm, password)

        const user2 = await User.findById(user.id)

        expect(user2.email).to.equal(newEmail)
    })

    it('fails on non existing user', async () => {
        const id = random.id()
        const newEmail = random.email()
        const newEmailConfirm = newEmail
        const password = random.password()

        try {
            await changeUserEmail(id, newEmail, newEmailConfirm, password)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('user not found')
        }
    })

    it('fails on email and its confirmation not matching', async () => {
        const id = random.id()
        const newEmail = random.email()
        const newEmailConfirm = random.email()
        const password = random.password()

        try {
            await changeUserEmail(id, newEmail, newEmailConfirm, password)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(ContentError)
            expect(error.message).to.equal('new email and its confirmation do not match')
        }
    })

    it('fails on wrong password', async () => {
        const name = random.name();
        const email = random.email();
        const password = random.password();
        const wrongPassword = random.password();
        const newEmail = random.email();
        const newEmailConfirm = newEmail;

        let hash = await bcrypt.hash(password, 8);

        const user = await User.create({ name, email, password: hash });

        try {
            await changeUserEmail(user.id, newEmail, newEmailConfirm, wrongPassword);
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(CredentialsError);
            expect(error.message).to.equal('wrong password');
        }
    });

    it('fails on invalid email format', async () => {
        const name = random.name();
        const email = random.email();
        const password = random.password();
        const newEmail = "invalidEmail"; // Esto no tiene formato de correo electrónico
        const newEmailConfirm = newEmail;

        let hash = await bcrypt.hash(password, 8);

        const user = await User.create({ name, email, password: hash });

        try {
            await changeUserEmail(user.id, newEmail, newEmailConfirm, password);
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(ContentError);
            expect(error.message).to.equal('new email is not valid');
        }
    });

    it('fails on invalid user id format', async () => {
        const invalidUserId = "123"; // Un ID que no cumple con el formato esperado
        const newEmail = random.email();
        const newEmailConfirm = newEmail;
        const password = random.password();

        try {
            await changeUserEmail(invalidUserId, newEmail, newEmailConfirm, password);
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(ContentError);
            expect(error.message).to.equal('user id is not a valid id');
        }
    });

    it('fails if the new email is already in use', async () => {
        const name1 = random.name();
        const email1 = random.email();
        const password1 = random.password();
        const name2 = random.name();
        const email2 = random.email();
        const password2 = random.password();

        let hash1 = await bcrypt.hash(password1, 8);
        let hash2 = await bcrypt.hash(password2, 8);

        // Asegúrate de que estos campos coincidan con los requerimientos de tu esquema de User
        const user1 = await User.create({ name: name1, email: email1, password: hash1 });
        const user2 = await User.create({ name: name2, email: email2, password: hash2 });

        try {
            await changeUserEmail(user2.id, email1, email1, password2); // Intentar cambiar el email del usuario 2 al email del usuario 1
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(ContentError); // Asegúrate de que este es el tipo de error correcto que tu función emite en esta situación
            expect(error.message).to.equal('email already exists'); // Este mensaje debe coincidir con lo que tu lógica realmente devuelve
        }
    });


    after(() => mongoose.disconnect())
})