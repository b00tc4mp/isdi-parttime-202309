import mongoose from 'mongoose'

import retrievePosts from './retrievePosts.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            // An attempt is made to retrieve posts associated with a specific ID
            retrievePosts('65b621b1b17051e49a33cbc0')
                .then(posts => {
                    console.log('retrieved posts', posts)
                })
                // refers to possible errors during the call to retrievePosts
                .catch(error => {
                    console.error(error)
                })
            // any synchronous errors that may occur in code that is directly inside the try block
        } catch (error) {
            console.error(error)
        }
    })
    /// This block will be executed if there is an error in the connection to the database using mongoose.connec
    .catch(error => console.error(error))


