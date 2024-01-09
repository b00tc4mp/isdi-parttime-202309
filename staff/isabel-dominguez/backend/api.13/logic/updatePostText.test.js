const mongoose = require('mongoose')
const updatePostText = require('./updatePostText');

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updatePostText('659aaf07e1d0a278068d446a', '659ab25810af0c2ef119051b', 'My sister and me!', (error) => {
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