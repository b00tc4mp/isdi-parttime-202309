const mongoose = require('mongoose')
const createPost = require('./createPost.js')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPost(
                '659aaf07e1d0a278068d446a',
                'https://cdn5.dibujos.net/dibujos/pintados/201443/dos-manzanas-comida-frutas-pintado-por-isis1234-9909248.jpg',
                'My sister and me',
                error => {
                    if (error) {
                        console.error(error)
                        return
                    }
                    console.log('post created')
                })

        } catch (error) {
            console.log(error)
        }

    })
    .catch(error => console.error(error))