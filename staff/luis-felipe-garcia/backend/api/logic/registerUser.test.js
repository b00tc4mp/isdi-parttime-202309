const mongoose = require('mongoose')
const registerUser = require('./registerUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            registerUser('Lee Chuga 112', 'lee@chuga11.es', '123123123', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('User registered')
            })

        } catch (error) {
            console.log(error)
        }
    })

.catch(error => console.error(error))