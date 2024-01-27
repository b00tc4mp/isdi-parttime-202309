const retrievePosts = require('./retrievePosts')

try {
    retrievePosts('1b43kkcm4oxs', (error, posts) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('successful retrievered!!', posts)
    })
} catch (error) {
    console.error(error)
}