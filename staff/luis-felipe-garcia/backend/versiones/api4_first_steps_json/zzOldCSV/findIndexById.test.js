const findIndexById = require('./dataOld/findIndexById')

try {
    findIndexById('./data/users.csv', '3n7rgalrgwg0', (error, index) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('index found', index)
    })
} catch (error) {
    console.log(error)

}

try {
    findIndexById('./data/posts.csv', 'post-123', (error, index) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('index found', index)

    })
} catch (error) {
    console.log(error)

}