const updatePostText = require('./updatePostText');

try {
    updatePostText('4unovwbpfji0', 'My name is Agua', '3u5gkv3so500', (error) => {
        if (error) {
            console.error(error)
            return
        }

        console.log('Post text updated successfully')
    })
} catch (error) {
    console.log(error)
}
