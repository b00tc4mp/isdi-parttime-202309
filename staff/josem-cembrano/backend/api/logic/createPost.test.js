const createPost = require('./createPost')

try {
    createPost('6ttz1tptn2c0', 'https://st3.depositphotos.com/2444145/18096/v/450/depositphotos_180966178-stock-illustration-cartoon-cabbage-character.jpg', 'beautiful and fresh', error => {
        if (error)
            console.error(error)

        return
    })

    console.log('created post')

} catch (error) {

    console.error(error)
}