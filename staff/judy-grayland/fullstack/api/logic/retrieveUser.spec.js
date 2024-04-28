import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveUser from './retrieveUser.js'
import { User } from '../data/models.js'
import { errors } from 'com'

const { NotFoundError } = errors
const { ObjectId } = mongoose.Types
dotenv.config()

describe('retrieveUser', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))

  beforeEach(() => User.deleteMany())

  it('succeeds on existing user', () => {
    const name = random.name()
    const email = random.email()
    const password = random.password()

    return User.create({ name, email, password }).then((user) => {
      return retrieveUser(user.id).then((user) => {
        expect(user.name).to.be.a('string')
        expect(user.name).to.equal(user.name)
        expect(user.id).to.be.undefined
        expect(user.email).to.be.undefined
        expect(user.password).to.be.undefined
        // podemos eliminar el catch error handling porque si falla es un throw dentro del it y el it tiene su propio catch interno.
      })
    })
  })

  it('fails on non-existing user', () => {
    return retrieveUser(new ObjectId().toString())
      .then(() => {
        throw new Error('should not reach this point')
      })
      .catch((error) => {
        expect(error).to.be.instanceOf(NotFoundError)
        expect(error.message).to.equal('user not found')
      })
  })

  after(() => mongoose.disconnect())
})
