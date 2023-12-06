const findUserById = require('./findIndexById')

try {
    findUserById('./data/users.csv','3n7rgalrgwg0', (error, index) => {
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
    findUserById('./data/posts.csv','post-123', (error, index) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('index found', index)
        
    })
} catch (error) {
    console.log(error)

}