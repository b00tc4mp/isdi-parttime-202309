import mongoose from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import registerUser from './registerUser.js'
import { SystemError, DuplicityError } from './errors.js'
import { User } from '../data/models.js'
dotenv.config()

// //tests
describe('registerUser', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))

  beforeEach(() => User.deleteMany())

  it('succeeds on new user correctly registered', () => {
    return registerUser('Me Lonchik', 'me@lonchik.com', 'aaa')
  })

  it('fails on already existing user', () => {
    return User.create({
      name: 'Tomate Cherry',
      email: 'tomate@cherry.com',
      password: 'aaa',
    }).then(() => {
      return registerUser('Tomate Cherry', 'tomate@cherry.com', 'aaa').catch(
        (error) => {
          expect(error).to.be.instanceOf(DuplicityError)
          expect(error.message).to.equal('user already exists')
        }
      )
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
