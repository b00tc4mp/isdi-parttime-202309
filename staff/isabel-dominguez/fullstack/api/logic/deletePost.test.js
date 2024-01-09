const mongoose = require('mongoose')
const deletePost = require('./deletePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            deletePost('6599ac7b3cdc02423f048cd3', (error, deletedPost) => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('Post deleted:', deletedPost)
            });
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))