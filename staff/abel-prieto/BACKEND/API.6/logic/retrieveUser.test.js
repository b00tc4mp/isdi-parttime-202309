const retrieveUser = require("./retrieveUser")

try {
    retrieveUser("2b4bwcqo9ps0", (error, user) => {
        if (error) {
            console.error(error)

            return
        }

        console.log("retrieved", user)
    })
} catch (error) {
    console.error(error)
}