const createPosts = require("./createPosts")

try {
    createPosts("Wendy Darling", "https://static.wikia.nocookie.net/disney/images/5/53/Profile_-_Wendy_Darling.jpeg/revision/latest?cb=20190312151612", "my name is Wendy!", error => {
        if (error) {
            console.log(error)

            return
        }

        console.log("post created!")
    })
} catch (error) {
    console.log(error)
}