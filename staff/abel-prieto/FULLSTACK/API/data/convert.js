const CSV = require("../utils/CSV")
const JSON = require("../utils/JSON")

CSV.parseFromFile("./data/posts.csv", (error, users) => {
    if (error) {
        console.error(error)

        return
    }

    JSON.stringifyToFile("./data/posts.json", users, error => {
        if (error) {
            console.error(error)

            return
        }

        console.log("file converted!")
    })
})