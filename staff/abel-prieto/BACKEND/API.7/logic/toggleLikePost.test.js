const toggleLikePost = require('./toggleLikePost')

try {
    toggleLikePost('24dlukpa1skg', '18ge8esdqgww', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('toggle success')
    })
} catch (error) {
    console.error(error)
}

