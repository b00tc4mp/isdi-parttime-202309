const deleteUser = require('./deleteUser') // el requiere es como el input

try {
    deleteUser('3fzqmx5cfck0', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }

        console.log('user deleted', userId)
    })

} catch (error) {
    console.log(error)
}