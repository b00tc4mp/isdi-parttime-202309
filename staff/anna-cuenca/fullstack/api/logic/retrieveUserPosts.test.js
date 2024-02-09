import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrieveUserPosts from './retrieveUserPosts.js'

(async () => {

    await mongoose.connect(process.env.MONGODB_URL)

    try {
        const posts = await retrieveUserPosts('65abeea7ccb29864b82b9dc4')
        console.log('retrieved user posts', posts)

    } catch (error) {
        console.error(error)

    }

})()


