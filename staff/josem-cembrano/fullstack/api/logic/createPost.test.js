import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { User } from '../data/models.js'

import createPost from './createPost.js'

mongoose.connect(process.env.TEST_MONGODB_URL)
    .then(() => User.create({ name: 'Super Market', email: 'supermarket@mail.com', password: '123123123' }))
    .then((user) => {
        try {
            createPost(user.id, 'https://png.pngtree.com/png-vector/20230801/ourlarge/pngtree-kawaii-cartoon-cauliflower-sticker-vector-png-image_6833366.png', 'this is my sticker!!')
                .then(() => console.log('created post'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
