const toggleLikePost = require('./toggleLikePost')

try {
    toggleLikePost('9nbvjt5wugo', '4op7rg7el9y0', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('post like toggled')
    })
} catch (error) {
    console.error(error)
}

