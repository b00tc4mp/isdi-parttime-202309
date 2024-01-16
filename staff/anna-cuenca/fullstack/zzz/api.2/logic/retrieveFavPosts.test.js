const mongoose = require('mongoose')

const retrieveFavPosts = require('./retrieveFavPosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {
            retrieveFavPosts('65944ed178f044ee3aece02b', (error, posts) => {
                if (error) {
                    console.error(error)
                    return
                }
                console.log('retrieved fav posts', posts)
            })

        } catch (error) {
            console.error(error)
        }

    })

    .catch(error => console.error(error))