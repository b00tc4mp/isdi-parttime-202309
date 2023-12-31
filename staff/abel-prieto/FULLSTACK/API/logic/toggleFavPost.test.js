const toggleFavPost = require('./toggleFavPost')

try {
    toggleFavPost('postId', 'userId', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('toggle success')
    })
} catch (error) {
    console.error(error)
}