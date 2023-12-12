const CSV = require(('./CSV'))

const data1 = CSV.loadAsObject('./data/users.csv', (error, users) => {
    if (error) {
        callback(error)
        return
    }
})

console.log(data1)