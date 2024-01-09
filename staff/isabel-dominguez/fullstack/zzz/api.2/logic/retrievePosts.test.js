const retrievePosts = require('./retrievePosts')

try {
    retrievePosts('amhkljhnhc4', (error, posts) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('retrieved', posts)
    })
} catch (error) {
    console.error(error)
}