const retrieveFavPosts = require('./retrieveFavPosts')

try {
    retrieveFavPosts('5egbu0dbu9c0', (error, favPosts) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('retrieved', favPosts)
    })
} catch (error) {
    console.error(error)
}