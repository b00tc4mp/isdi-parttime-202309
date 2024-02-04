import mongoose from 'mongoose'
import { expect } from 'chai'

import registerUser from './registerUser.js'
import { User } from '../data/models.js'

import { errors } from 'com'
const { SystemError, NotFoundError, CredentialsError, DuplicityError } = errors

describe('registerUser', () => {
    // Antes de ejecutar cualquier prueba, conectarse a la base de datos MongoDB
    before(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))
    // Antes de cada prueba, eliminar todos los documentos en la colección User
    // beforeEach(() => User.deleteMany())

    it('succeds on new user', () => {
        // Llamando a la función registerUser con los parámetros dados
        return registerUser('Ji Rafa', 'ji@rafa.com', '123123123')
    })

    it('fails on already existing user', () => {
        // Creando un nuevo usuario con los detalles especificados en la colección User
        return User.create({ name: 'Le On', email: 'le@on.com', password: '123123123' })
            .then(() => {
                // Intentando registrar un usuario con los mismos detalles, esperando un error
                return registerUser('Le On', 'le@on.com', '123123123')
                    .catch(error => {
                        // Verificando que el error capturado sea una instancia de DuplicityError
                        expect(error).to.be.instanceOf(DuplicityError)
                        // Verificando que el mensaje de error coincida con el mensaje esperado
                        expect(error.message).to.equal('user already exists')
                    })
            })
    })

    after(() => mongoose.disconnect())
})