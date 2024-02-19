import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import authenticateUser from './authenticateUser.js'

// De esta manera podemos hacer refactor y simplificar codigo:
(async () => {
    await mongoose.connect(process.env.TEST_MONGODB_URL)

    try {
        const userId = await authenticateUser('pis@tacho.com', '123123123')

        console.log('user authenticated', userId)
    } catch (error) {
        console.error(error)
    }
})()


// (async () => {
//     try {
//         await mongoose.connect(process.env.TEST_MONGODB_URL)
//     } catch (error) {
//         console.error(error)
//     }
//     try {
//         const userId = await authenticateUser('pis@tacho.com', '123123123')
//         console.log('user authenticated', userId)

//     } catch (error) {
//         console.error(error)
//     }
// })()