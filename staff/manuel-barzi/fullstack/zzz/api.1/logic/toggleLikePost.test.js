const toggleLikePost = require('./toggleLikePost')

try {
    toggleLikePost('4945v51dd8i0', '7e5klaogm6o0', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('post like toggled')
    })
} catch (error) {
    console.error(error)
}