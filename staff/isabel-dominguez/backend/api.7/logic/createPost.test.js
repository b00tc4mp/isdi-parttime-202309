const createPost = require('./createPost')

try {
    createPost('3u5gkv3so500', 'https://th.bing.com/th/id/OIP.S1kgrJdqQkc2ohnpXCLhEwAAAA?rs=1&pid=ImgDetMain', 'I am Aguacate!', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('created')
    })
} catch (error) {
    console.error(error)
}