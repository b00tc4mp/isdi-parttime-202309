import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import { errors } from 'shared'
const { DuplicityError, RangeError } = errors

import { User } from '../data/models.js'
import registerUser from './registerUser.js'

dotenv.config()

describe('registerUser', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))
  beforeEach(() => User.deleteMany())

  // HAPPY path
  it('succeeds on new user being correctly registered', () => {
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

  // UNHAPPY paths
  it('fails on already existing user', () => {
    const name = random.name()
    const email = random.email()
    const password = random.password()

    return User.create({ name, email, password }).then((user) => {
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
  // it('fails on too short password', () => {
  //   const name = random.name()
  //   const email = random.email()
  //   const password = '1234'

  //   return registerUser(name, email, password)
  //     .then(() => {
  //       throw new Error('should not reach this point')
  //     })
  //     .catch((error) => {
  //       expect(error).to.be.instanceOf(RangeError)
  //     })
  // })

  after(() => mongoose.disconnect())
})
