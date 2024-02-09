import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import deletePost from './deletePost.js'

(async () => {
    await mongoose.connect(process.env.MONGODB_URL)

    try {
        await deletePost('65ab846ed998b589cd22fa81', '65ba98bd6ed1203b92a31b79')
        console.log('post deleted')
        s
    } catch (error) {
        console.log(error)
    }
})

