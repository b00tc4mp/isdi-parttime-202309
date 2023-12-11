const deleteUser = require('./deleteUser') // el requiere es como el input

try {
    deleteUser('31y1lmy4r700', '222', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }

        console.log('user deleted', userId)
    })

} catch (error) {
    console.log(error)
}