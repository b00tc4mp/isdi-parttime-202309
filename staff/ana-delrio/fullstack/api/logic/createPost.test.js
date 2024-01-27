import mongoose from 'mongoose'

import createPost from './createPost.js'
import { User } from '../data/models.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => User.deleteMany())
    .then(() => User.create({ name: 'Ana', email: 'ana@pan.com', password: '123123123' }))
    .then(user => {
        try {
            createPost(user.id, 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas-para-ninos-cine-infantil/15-personajes-de-disney-que-merecen-un-spin-off/pocahontas/110201730-1-esl-ES/Pocahontas.jpg?resize=980:*', 'what a fresh day')
                .then(() => console.log('created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))