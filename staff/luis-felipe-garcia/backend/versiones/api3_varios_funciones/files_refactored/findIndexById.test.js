const findUserById = require('./findIndexById')

try {
    findUserById('3n7rgdalrgwg0', (error, index) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('index found', index)
    })
} catch (error) {
    console.log(error)

}