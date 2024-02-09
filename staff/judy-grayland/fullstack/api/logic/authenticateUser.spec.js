import mongoose from 'mongoose'
import { expect } from 'chai'

import authenticateUser from './authenticateUser.js'
import { NotFoundError } from './errors.js'
import { User } from '../data/models.js'

describe('authenticateUser', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))

  beforeEach(() => User.deleteMany())

  it('succeeds on correct credentials', () => {
    return User.create({
      name: 'Agua Cate',
      email: 'agua@cate.com',
      password: 'aaa',
    }).then((user) => {
      return authenticateUser('agua@cate.com', 'aaa').then((userId) => {
        expect(userId).to.be.a('string')
        expect(userId).to.have.lengthOf(24)
        expect(userId).to.equal(user.id)
        // podemos eliminar el catch error handling porque si falla es un throw dentro del it y el it tiene su propio catch interno.
      })
    })
  })

  it('fails on wrong email', () => {
    return authenticateUser('agua@cate2.com', 'aaa')
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
