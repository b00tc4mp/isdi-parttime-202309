const registerUser = require('./registerUser')

try {
    registerUser('Agua Cate', 'agua@cate.com', '123123123', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('user registered')
    })
} catch (error) {
    console.log(error)
}