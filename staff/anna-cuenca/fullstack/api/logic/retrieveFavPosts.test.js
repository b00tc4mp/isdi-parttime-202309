import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrieveFavPosts from './retrieveFavPosts.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {

        try {
            retrieveFavPosts('65afe3cee4a6208ef9bf08b0')
                .then((posts) => {

                    console.log('retrieved fav posts', posts)
                })
                .catch(error => {
                    console.error(error)
                })


        } catch (error) {
            console.error(error)
        }

    })

    .catch(error => console.error(error))