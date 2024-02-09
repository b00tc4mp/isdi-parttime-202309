import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import toogleLikePost from './toogleLikePost.js'

(async () => {
    await mongoose.connect(process.env.MONGODB_URL)

    try {
        await toogleLikePost('65afe3cee4a6208ef9bf08b0', '65afea36ef22d1107e006031')
        console.log('post like toogled')
    } catch (error) {
        console.error(error)
    }

})


