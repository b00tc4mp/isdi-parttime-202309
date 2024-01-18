import mongoose from 'mongoose'

const registerUser = require('./registerUser.js')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            registerUser('Man zana', 'man@zana.com', '123123123', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('user registered')
            })
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))