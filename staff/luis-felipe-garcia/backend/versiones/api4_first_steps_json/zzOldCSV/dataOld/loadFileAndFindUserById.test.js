const loadFileAndFindUserById = require('./loadFileAndFindUserById')

try {
    loadFileAndFindUserById('u2', (error, user) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('user found', user)
    })
} catch (error) {
    console.log(error)

}