import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrievePosts from './retrievePosts.js'

mongoose.connect(process.env.TEST_MONGODB_URL)
    .then(() => {
        try {
            retrievePosts('65be8347494a88de5dd961c6')
                .then(posts => {
                    console.log('retrievered posts', posts)
                })
                .catch(error => {
                    console.error(error)
                })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))