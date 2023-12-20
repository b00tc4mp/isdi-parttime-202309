const retrievePosts = require('./retrievePosts')

try {
    retrievePosts('69d4ph8zzj00', (error, posts) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('retrieved', posts)
    })

} catch (error) {
    console.error(error)
}