import mongoose from 'mongoose'

import registerUser from './registerUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            registerUser('Agua Cate', 'agua@cate.com', '234234234')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))