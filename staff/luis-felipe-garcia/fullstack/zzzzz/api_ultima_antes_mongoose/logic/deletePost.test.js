const deletePost = require('./deletePost')

try {

    deletePost('1g6al6ee05pc', '3t3nfzsgt4c0', error => {
        if (error) {
            console.error(error.message)
            return
        }

        console.log('post deleted')
    })

} catch (error) {
    console.error(error.message)

}