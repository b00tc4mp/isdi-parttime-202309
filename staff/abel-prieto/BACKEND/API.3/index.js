const CSV = require("./utils/CSV")

// CSV.loadAsObject("./users.csv", (error, users) => {
//     if (error) {
//         console.error(error)

//         return
//     }

//     console.log(users)
// })

CSV.loadAsObject("./data/users.csv", (error, users) => {
    if (error) {
        console.error(error)

        return
    }

    CSV.saveFromObject("./data/users.csv", users, error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('end')
    })
})
