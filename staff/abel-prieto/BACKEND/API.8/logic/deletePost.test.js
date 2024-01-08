const mongoose = require('mongoose')
const deletePost = require('./deletePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            deletePost('6594280f88dc69a7d9e4e18f', '659c0550dde9961950f36f6d', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('post succesfully deleted!')
            })
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))