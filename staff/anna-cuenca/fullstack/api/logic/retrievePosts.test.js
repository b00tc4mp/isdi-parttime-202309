import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrievePosts from './retrievePosts.js'

(async () => {

    await mongoose.connect(process.env.MONGODB_URL)

    try {
        const posts = await retrievePosts('65abeea7ccb29864b82b9dc4')
        console.log('retrieved', posts)

    } catch (error) {
        console.error(error)

    }
})()





