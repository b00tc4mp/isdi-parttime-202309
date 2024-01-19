import mongoose from 'mongoose'
import retrievePosts from './retrieveAllDatabasePosts'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {

            retrieveAllDatabasePosts(
                (error, posts) => {

                    if (error) {
                        console.error(error)
                        return
                    }

                    console.log('user posts', posts)

                })

        } catch (error) {
            console.error(error)

        }
    })