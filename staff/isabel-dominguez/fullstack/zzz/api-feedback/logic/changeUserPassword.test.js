import mongoose from 'mongoose'

import changeUserPassword from './changeUserPassword.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changeUserPassword('65b531d607c29e5eb47be400', '123123123', '234234234', '234234234')
                .then(() => console.log("password succesfully changed!"))
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))