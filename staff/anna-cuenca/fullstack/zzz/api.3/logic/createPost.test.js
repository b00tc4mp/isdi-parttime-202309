const mongoose = require('mongoose')
const createPost = require('./createPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {
        try {
            createPost('659a904a06ac064c6025bc91', 'https://as1.ftcdn.net/v2/jpg/02/49/85/30/1000_F_249853026_lBR4FaSpeVk2RJukVg9TLUe4m95NRNE3.jpg', 'Remo', error => {
                if (error) {
                    console.error(error)
                    return
                }
                console.log('post created')
            })
        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))  