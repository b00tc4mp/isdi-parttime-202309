const mongoose = require('mongoose')
const updatePostText = require('./updatePostText');

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updatePostText('65a2786812e5cd4ec6c5b99d', '65a2787912e5cd4ec6c5b9a9', 'My granspa', (error) => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('Post text updated successfully')
            })
        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))