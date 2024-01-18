const mongoose = require('mongoose')

const changePasswordUser = require('./changePasswordUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changePasswordUser('6599810a2c6f1a3caa0ed9f3', '123123123', '234234234', '234234234', (error, userId) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('password changed', userId)
            })
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))