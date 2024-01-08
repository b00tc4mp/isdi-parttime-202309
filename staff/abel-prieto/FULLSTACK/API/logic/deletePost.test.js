const deletePost = require('./deletePost')

try {
    deletePost('user id', 'postId', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('post deleted!')
    })
} catch (error) {
    console.log(error)
}