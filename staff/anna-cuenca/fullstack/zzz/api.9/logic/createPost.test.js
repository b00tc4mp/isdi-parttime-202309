import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect(process.env.MONGODB_URL)

    .then(() => {
        try {
            createPost('65ab846ed998b589cd22fa81', 'https://previews.123rf.com/images/pcanzo/pcanzo1309/pcanzo130900038/21960104-las-patatas-fritas-franc%C3%A9s-saludando.jpg', 'Para borrar')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))

        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))  