const mongoose = require('mongoose')
const editTextPost = require('./editTextPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {
        try {
            editTextPost('65944ed178f044ee3aece02b', '6595064381b9e9c247381d20', 'La Patata y el Ketchup', error => {
                if (error) {
                    console.error(error)
                    return
                }
                console.log('post text edited')
            })
        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))  
