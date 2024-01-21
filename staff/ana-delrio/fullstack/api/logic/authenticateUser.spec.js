const mongoose = require('mongoose')

const authenticateUser = require('./authenticateUser')

const { SystemError, NotFoundError, CredentialsError } = require('./errors')


describe('authenticateUser', () => {
    let expect

    // antes de nada, conectamos con mongo
    before(() =>
        import('chai')
            .then(chai => expect = chai.expect)
            .then(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))

    )

    // primera prueba
    // done actua como callback
    it('succeeds on correct credentials', done => {
        authenticateUser('alcachofa@gmail.com', '123123123', (error, userId) => {
            if (error) {
                done(error)

                return
            }

            expect(userId).to.be.a('string')
            expect(userId).to.have.lengthOf(24)
            expect(userId).to.equal('65acdd15a62e375123fe94bd')

            done()
        })
    })

    // segunda prueba
    it('fails on wrong email', done => {
        authenticateUser('alcachofa2@gmail.com', '123123123', (error, userId) => {
            try {
                expect(error).to.be.instanceof(NotFoundError)
                expect(error.message).to.equal('user not found')
                expect(userId).to.be.undefined

                done()

            } catch (error) {
                done(error)
            }

        })
    })

    // desconectamos de mongo
    after(() => mongoose.disconnect())

})




