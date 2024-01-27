const mongoose = require('mongoose')

const toggleLikePost = require('./toggleLikePost')

mongoose.connect('mongodb://127.0.0.1:27017/test  ')
    .then(() => {

        try {
            toggleLikePost('65abfd4bb4c824321d85d89f', '65a994e7b4c824321d85d891', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('post like toggled')
            })
        } catch (error) {
            console.error(error)
        }

    })
    .catch(error => console.error(error))