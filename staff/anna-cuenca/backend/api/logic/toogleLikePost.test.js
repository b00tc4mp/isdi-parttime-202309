

const mongoose = require('mongoose')
const toogleLikePost = require('./toogleLikePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {

        try {
            toogleLikePost('658b1787d6c3f0f29677ccc6', '658b0eb28e3b8aedd4aeb966', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('post like toogled')
            })
        } catch (error) {
            console.error(error)
        }
    })

    .catch(error => console.error(error))

