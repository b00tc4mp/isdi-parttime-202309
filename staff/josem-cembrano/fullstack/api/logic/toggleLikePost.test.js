import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import toggleLikePost from './toggleLikePost.js'

mongoose.connect(process.env.TEST_MONGODB_URL)
    .then(() => {

        try {
            toggleLikePost('65a7bcdaff739420cdb3f9a1', '65acffdb7e9f6dc641a72c6c')
                .then(() => {
                    console.log('like toggled 👍')
                })
                .catch(() => {
                    console.error(error)
                })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
