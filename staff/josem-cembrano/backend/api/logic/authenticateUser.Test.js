const mongoose = require('mongoose')

const authenticateUser = require('./authenticateUser.js')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            authenticateUser('bro@coli', '', (error, userId) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('user authenticated', userId)
            })
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))