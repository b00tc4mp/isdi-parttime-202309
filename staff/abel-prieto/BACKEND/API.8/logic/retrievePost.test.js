const mongoose = require('mongoose')
const retrievePost = require('./retrievePost')


mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {    
        try {
            retrievePost('6595b6f5a456f32af3f9b029', (error, post) => {
                if (error) {
                    console.error(error)
                }

                console.log('post retrieved:', post)
            }) 
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))
