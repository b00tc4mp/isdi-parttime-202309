const changeEmailUser = require('./changeEmailUser')

try {
    changeEmailUser('amhkljhnhc4', 'cara@basseta.com', 'cara@bassseta.com', 'cara@bassseta.com', (error, userId) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('email changed', userId)
    })
} catch (error) {
    console.log(error)
}