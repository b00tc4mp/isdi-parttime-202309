const mongoose = require('mongoose')
const authenticateUser = require("./authenticateUser")

const { NotFoundError } = require('./errors')

describe('authenticateUser', () => {
    let expect

    before(() => {
        import('chai')
            .then(chai => expect = chai.expect)
            .then(() => mongoose.connect('mongodb://127.0.0.1:27017/test'))
    })

    it('succeeds on correct credentials', done => {
        authenticateUser('wendy@darling.com', '123123123', (error, userId) => {
            if (error) {
                done(error)
    
                return
            }
    
            expect(userId).to.be.a('string') // Que SEA un String
            expect(userId).to.have.lengthOf(24) // Que TENGA 24 caracteres
            expect(userId).to.equal('659eb75801ced6e04a9df7a1') // Que sea IGUAL al id

            done()
        })
    })

    it('fails on wrong email', done => {
        authenticateUser('wendoling@darling.com', '123123123', (error, userId) => {
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