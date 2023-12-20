const toggleLikePost = require('./toggleLikePost')
try {
    toggleLikePost('1b43kkcm4oxs', '2oq2m0vjmi60', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('like toggled👍')

    })
} catch (error) {
    console.log(error)
}