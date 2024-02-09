import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrieveFavPosts from './retrieveFavPosts.js'

(async () => {

    await mongoose.connect(process.env.MONGODB_URL)

    try {
        const posts = await retrieveFavPosts('65afe3cee4a6208ef9bf08b0')
        console.log('retrieved fav posts', posts)

    } catch (error) {
        console.error(error)
    }
})()


