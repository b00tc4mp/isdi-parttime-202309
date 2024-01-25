import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrievePosts from './retrievePosts.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {

        try {
            retrievePosts('65abeea7ccb29864b82b9dc4') //user id de patata frita
                .then(posts => console.log('retrieved', posts))
                .catch(error => console.log(error))

        } catch (error) {
            console.error(error)
        }

    })

    .catch(error => console.error(error))