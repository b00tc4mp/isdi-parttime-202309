import mongoose from 'mongoose'
import dotenv from 'dotenv'
import retrieveFiles from '../logic/retrieveFiles.js'

dotenv.config()

mongoose.connect(process.env.URL_MONGODB_HIINIT_API)
    .then(() => {
        try {
            retrieveFiles('65e8c8c89653e312c3490947')
                .then(files => console.log('files retrieved!', files))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))