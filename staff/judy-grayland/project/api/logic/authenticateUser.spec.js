import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { expect } from 'chai'
import bcrypt from 'bcryptjs'
import random from './helpers/random.js'
import { errors } from 'shared'
const { NotFoundError, CredentialsError } = errors

import { User } from '../data/models.js'
import authenticateUser from './authenticateUser.js'

dotenv.config()

describe('authenticateUser', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))
  beforeEach(() => User.deleteMany())

  it('succeeds on correct credentials', () => {
    const name = random.name()
    const email = random.email()
    const password = random.password()

    return bcrypt
      .hash(password, 8)
      .then((hash) => User.create({ name, email, password: hash }))
      .then((user) => {
        return authenticateUser(email, password).then((userId) => {
          expect(userId).to.be.a('string')
          expect(userId).to.have.lengthOf(24)
          expect(userId).to.equal(user.id)
        })
      })
  })

  it('fails on wrong email', () => {
    const email = random.email()
    const password = random.password()

    return authenticateUser(email, password)
      .then(() => {
        throw new Error('should not reacht this point')
      })
      .catch((error) => {
        expect(error).to.be.instanceOf(NotFoundError)
        expect(error.message).to.equal('user not found')
      })
  })

  it('fails on wrong password', () => {
    const name = random.name()
    const email = random.email()
    const password = random.password()

    return User.create({ name, email, password })
      .then((user) => {
        return authenticateUser(email, password + '-wrong')
      })
      .then(() => {
        throw new Error('should not reach this point')
      })
      .catch((error) => {
        expect(error).to.be.instanceOf(CredentialsError)
        expect(error.message).to.equal('wrong password')
      })
  })
})
