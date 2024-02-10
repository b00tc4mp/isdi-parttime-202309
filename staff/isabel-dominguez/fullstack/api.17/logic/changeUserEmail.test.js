import mongoose from 'mongoose'

import changeUserEmail from './changeUserEmail.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changeUserEmail('', 'man@zana.com', 'man@zanita.com', 'man@zanita.com')
                .then(() => console.log("email succesfully changed!"))
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))