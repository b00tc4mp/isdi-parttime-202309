const toggleLikePost = require('./toggleLikePost')

try {
    toggleLikePost('65849effd6fe566e658c5580', '', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('post like toggled')
    })
} catch (error) {
    console.error(error)
}