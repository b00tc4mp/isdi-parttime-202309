const mongoose = require('mongoose')
const retrievePosts  = require('./retrievePosts')


mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(()=> {
        try {
            retrievePosts('659eda7f439e5bb06833d695', (error, posts) => {
                if (error) {
                    console.error(error)

                    return
                }

            console.log('retrieved posts', posts)
            })
        } catch (error) {
            console.log(error)
    }
})
.catch(error => console.error(error))
