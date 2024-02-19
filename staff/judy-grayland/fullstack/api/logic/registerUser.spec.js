import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import registerUser from './registerUser.js'

import { User } from '../data/models.js'
import { errors } from 'com'

const { DuplicityError } = errors

dotenv.config()

// //tests
describe('registerUser', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))

  beforeEach(() => User.deleteMany())

  it('succeeds on new user correctly registered', () => {
    const name = random.name()
    const email = random.email()
    const password = random.password()
    return registerUser(name, email, password).then(() => {
      return User.findOne({ email }).then((user) => {
        expect(user).to.exist
        expect(user.name).to.equal(name)
        expect(user.email).to.equal(email)
        expect(user.password).to.equal(password)
      })
    })
  })

  it('fails on already existing user', () => {
    const name = random.name()
    const email = random.email()
    const password = random.password()

    return User.create({ name, email, password }).then(() => {
      return registerUser(name, email, password)
        .then(() => {
          throw new Error('should not reach this point')
        })
        .catch((error) => {
          expect(error).to.be.instanceOf(DuplicityError)
          expect(error.message).to.equal('user already exists')
        })
    })
  })
  /*Si no queremos borrar la BBDD, no nos hace falta el añadir la función para crear un usuario, y quedaría así:
  it('fails on already existing user', () => {
    return registerUser('Tomate Cherry', 'tomate@cherry.com', 'aaa').catch(
      (error) => {
        expect(error).to.be.instanceOf(DuplicityError)
        expect(error.message).to.equal('user already exists')
      }
    )
  })
 */
  after(() => mongoose.disconnect())
})
