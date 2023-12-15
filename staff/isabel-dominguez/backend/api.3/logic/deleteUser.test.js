const deleteUser = require('./deleteUser')

try {
    deleteUser('75cj844cqjg0', '123123123', (error, userId) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('user deleted', userId)
    })
} catch (error) {
    console.log(error)
}