import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import retrieveUser from './retrieveUser.js'

(async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    try {

        const user = await retrieveUser('65d0f092908a9e70e97a29d6')
        console.log('retrieved', user)

    } catch (error) {
        console.error(error)
    }
})()

