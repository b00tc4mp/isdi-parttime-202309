const mongoose = require('mongoose')

const authenticateUser = require('./authenticateUser')

const { SystemError, NotFoundError, CredentialsError } = require('./errors')

describe('authenticateUser', () => {
    let expect

    before(() =>
        import('chai')
            .then(chai => expect = chai.expect)
            .then(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))
    )

    it('succeeds on correct credentials', done => {
        authenticateUser('peter@pan.com', '123123123', (error, userId) => {
            if (error) {
                done(error)
                return
            }
            expect(userId).to.be.a('string')
            expect(userId).to.have.lengthOf(24)
            expect(userId).to.equal('6584656975fc0b52c39022e1')

            done()
        })
    })

    it('wrong mail error', done => {
        authenticateUser('wrong@mail.com', '123123123', (error, userId) => {
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

    it('wrong password', done => {
        authenticateUser('peter@pan.com', 'wrong_password', (error, password) => {
            try {
                expect(error).to.be.instanceOf(CredentialsError)
                expect(error.message).to.equal('wrong credentials')
                expect(password).to.not.equal('123123123')

                done()
            } catch (error) {
                done(error)
            }
        })
    })

    after(() => mongoose.disconnect)
})

