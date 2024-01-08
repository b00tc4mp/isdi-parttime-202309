const mongoose = require('mongoose')
const deletePost = require('./deletePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {
        try {
            deletePost('65944ed178f044ee3aece02b', '659502ecd75215292fa1831c', error => {
                if (error) {
                    console.error(error)
                    return
                }
                console.log('post deleted')
            })
        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))  
