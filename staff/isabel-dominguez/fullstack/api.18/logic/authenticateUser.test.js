import mongoose from 'mongoose'

import authenticateUser from './authenticateUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            authenticateUser('li@mon.com', '123123123')
                .then(userId => {
                    console.log('user authenticate', userId)
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))