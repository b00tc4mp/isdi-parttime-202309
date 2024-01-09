const authenticateUser = require('./authenticateUser')

try {
    authenticateUser('agua@cate.com', '234234234', (error, userId) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('user authenticated', userId)
    })
} catch (error) {
    console.log(error)
}