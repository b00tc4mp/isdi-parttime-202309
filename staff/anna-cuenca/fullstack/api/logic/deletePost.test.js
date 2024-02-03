import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import deletePost from './deletePost.js'

mongoose.connect(process.env.MONGODB_URL)

    .then(() => {
        try {
            deletePost('65ab846ed998b589cd22fa81', '65ba98bd6ed1203b92a31b79')
                .then(() => console.log('post deleted'))
                .catch(error => console.error(error))

        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error)) 