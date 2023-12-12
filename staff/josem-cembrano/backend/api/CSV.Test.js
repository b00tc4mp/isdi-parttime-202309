const CSV = require('./CSV')

/*CSV.parseFromFile('./users.csv', (error, users) => {
    if (error) {
        console.error(error)

        return
    }

    console.log(users)
})*/

CSV.parseFromFile('./users.csv', (error, users) => {
    if (error) {
        console.error(error)

        return
    }

    CSV.stringifyToFile('./users2.csv', users, error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('end')
    })
})

const csv = `id,name,email,password\r
47mjf45b71u0,Cala Bacin,cala@bazin,123123123`

const users = CSV.parse(csv)
console.log(users)

const csv2 = CSV.stringify(users)
console.log(csv2)