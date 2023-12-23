const retrievePost = require('./retrievePost')

try {
    retrievePost('1g958dd4qk0w', (error, posts) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('post recovered!', posts)
    })
} catch (error) {
    console.log(error)
}