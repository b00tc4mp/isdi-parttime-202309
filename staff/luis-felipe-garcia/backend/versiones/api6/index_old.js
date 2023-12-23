

const CSV = require('./utils/CSV')
/*CSV.loadAsObject('./users.csv', (error, users) => {
    if (error) {
        console.log(error)
        return
    }

    console.log(users)
})*/

/*array = [
    { id: 'u1', name: 'name1', email: 'email1@gmail.com', password: '1' },
    { id: 'u2', name: 'name2', email: 'email2@gmail.com', password: '1' },
    { id: 'u3', name: 'name3', email: 'amail3@gmail.com', password: '1' },
    { id: 'u4', name: 'name4', email: 'email4@gmail.com', password: '1' },
    { id: 'u5', name: 'name5', email: 'amail5@gmail.com', password: '1' },
    { id: 'u6', name: 'name6', email: 'email6@gmail.com', password: '1' },
    { id: 'u7', name: 'name7', email: 'amail7@gmail.com', password: '1' }
]*/


//const CSV = require('./CSV')
CSV.loadAsObject('./data/posts.csv', (error, posts) => {
    if (error) {
        console.log(error)
        return
    }
    console.log(posts)

    CSV.saveFromObject('./posts2.csv', posts, error => {
        if (error) {
            callback(error)
            return
        }
    })
})
console.log('continue...')