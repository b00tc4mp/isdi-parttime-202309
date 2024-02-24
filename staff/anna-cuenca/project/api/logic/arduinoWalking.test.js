import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import arduinoWalking from './arduinoWalking.js'

(async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    try {
        await arduinoWalking()
        console.log('Otto is walking')
    } catch (error) {
        console.log(error)
    }

})()