const changePasswordUser = require('./changePasswordUser')

try {
    changePasswordUser('9nbvjt5wugo', '234234234', '234234234', '234234234', (error, userId) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('password changed', userId)
    })
} catch (error) {
    console.log(error)
}