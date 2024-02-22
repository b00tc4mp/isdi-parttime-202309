import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import { authenticateAdminHandler } from './handlers/index.js'

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL_PROYECT)

        const server = express()
        server.get('/', (req, res) => res.send('Hello, Project⭐'))

        const jsonBodyParser = express.json()

        server.use(cors())

        server.post('/admin/auth', jsonBodyParser, authenticateAdminHandler)

        server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))

    } catch (error) {
        console.error(error)
    }
})()
