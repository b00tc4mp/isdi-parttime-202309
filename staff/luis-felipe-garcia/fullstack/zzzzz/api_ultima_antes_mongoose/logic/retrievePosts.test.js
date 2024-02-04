const retrievePosts = require('./retrievePosts')
    
try {
    retrievePosts('1g6al6ee05pc', (error, posts) => {
        if (error) {
            console.error(error)
            return
        }

        console.log('retrieved', posts)

    })


} catch (error) {
    console.error(error)
}
