const mongoose = require('mongoose')
const toggleLikePost = require('./toggleLikePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleLikePost('65942e03e5a6dab915783e58', '65942e77657640a65767094d', error => {
                if (error) {
                    console.error(error)
        
                    return
                }
        
                console.log('toggle like success!!')
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))

