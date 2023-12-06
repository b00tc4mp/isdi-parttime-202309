const findUserById = require('./findUserById')

try {
    findUserById('3n7rgalrgwg0', (error, user) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('user found', user)
    })
} catch (error) {
    console.log(error)

}