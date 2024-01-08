const retrieveUser = require("./retrieveUser")

try {
    retrieveUser("24dlukpa1skg", (error, user) => {
        if (error) {
            console.error(error)

            return
        }

        console.log("retrieved", user)
    })
} catch (error) {
    console.error(error)
}