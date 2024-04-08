const retrievePosts = require('./retrievePosts')

try {
    retrievePosts("2eqjhn1o45no", (error, posts) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('retrieved', posts)
    })
} catch (error) {
    console.log(error)
}
