const mongoose = require('mongoose')

const createPost = require('./createPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPost('65a7bcdaff739420cdb3f9a1', 'https://png.pngtree.com/png-vector/20230801/ourlarge/pngtree-kawaii-cartoon-cauliflower-sticker-vector-png-image_6833366.png', 'this is my sticker!!', error => {
                if (error)
                    console.error(error)

                return
            })

            console.log('created post')

        } catch (error) {

            console.error(error)
        }
    })
    .catch(error => console.error(error))