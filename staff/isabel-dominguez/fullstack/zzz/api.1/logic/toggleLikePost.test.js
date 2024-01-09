const toggleLikePost = require('./toggleLikePost')

try {
    toggleLikePost('amhkljhnhc4', '4unovwbpfji0', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('post like toggled')
    })

} catch (error) {
    console.error(error)
}

// isabe@Amyyluna MINGW64 ~/workspace/isdi-parttime-202309/staff/isabel-dominguez/backend/api (feature/backend)
// $ node logic/toggleLikePost.test.js
// post like toggled