import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveUser from './retrieveUser.js'
import { User } from '../data/models.js'
import { errors } from 'com'
import { ContentError } from 'com/errors.js'

const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('retrieveUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    it('succeed on existing user', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        return User.create({ name, email, password })
            .then(user => {
                return retrieveUser(user.id)
                    .then(user => {
                        expect(user.name).to.be.a('string')
                        expect(user.name).to.equal(name)
                        expect(user.id).to.be.a('string')
                        expect(user.email).to.be.undefined
                        expect(user.password).to.be.undefined
                    })
            })
    })

    it('fails on non-existing user', () => {
        return retrieveUser(new ObjectId().toString())
            .then(user => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    it('returns only specified fields for an existing user', async () => {
        // Preparación: Crear un usuario
        const userData = {
            name: random.name(),
            email: random.email(),
            password: random.password()
        };
        const user = await User.create(userData);

        // Ejecución: Recuperar el usuario
        const retrievedUser = await retrieveUser(user.id);

        // Verificación
        expect(retrievedUser).to.have.all.keys('id', 'name');
        expect(retrievedUser.id).to.equal(user.id);
        expect(retrievedUser.name).to.equal(userData.name);
    });

    it('fails with an invalid user id format', async () => {
        const invalidUserId = "invalidId";

        try {
            await retrieveUser(invalidUserId);
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(ContentError);
        }
    });

    it('fails for a valid but non-existing user ID', async () => {
        const nonExistingUserId = new ObjectId().toString();

        try {
            await retrieveUser(nonExistingUserId);
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError);
            expect(error.message).to.equal('user not found');
        }
    });



    after(() => mongoose.disconnect())
})