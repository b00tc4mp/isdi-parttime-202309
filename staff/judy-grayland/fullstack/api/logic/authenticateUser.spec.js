import mongoose from 'mongoose'
import { expect } from 'chai'

import authenticateUser from './authenticateUser.js'
import { NotFoundError } from './errors.js'

describe('authenticateUser', () => {
  before(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))

  //done es un callback que le envía jest al otro callback como parámetro para que lo utilices para marcar que ha finalizado el test. done(error) es que ha habido eror, y done() a secas para decir que ha ido bien.
  it('succeeds on correct credentials', (done) => {
    authenticateUser('agua@cate.com', 'aaa', (error, userId) => {
      if (error) {
        done(error)

        return
      }
      try {
        expect(userId).to.be.a('string')
        expect(userId).to.have.lengthOf(24)
        expect(userId).to.equal('65b0f579f9beb466beb3a8e1')

        done()
      } catch (error) {}
    })
  })

  it('fails on wrong email', (done) => {
    debugger
    authenticateUser('agua@cate2.com', 'aaa', (error, userId) => {
      // tenemos que poner los errores dentro de un try catch porque si falla uno de los expect, no se llega a ejecutar el done y se queda tonto
      try {
        expect(error).to.be.instanceOf(NotFoundError)
        expect(error.message).to.equal('user not found')
        expect(userId).to.be.undefined

        done()
      } catch (error) {
        done(error)
      }
    })
  })

  after(() => mongoose.disconnect())
})
