import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import retrieveMovements from './retrieveMovements.js'

(async () => {

    await mongoose.connect(process.env.MONGODB_URL)

    try {
        const movements = await retrieveMovements('65d8d9dffdfc051c2e6c1e96', '65ec9788bcfbaf8e5d352a6c')
        console.log('retrieves sequence movements', movements)
    } catch (error) {
        console.error(error)

    }
})()

