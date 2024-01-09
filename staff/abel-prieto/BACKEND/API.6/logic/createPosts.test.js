const createPosts = require("./createPosts")

try {
    createPosts("43htuuxgyl20", "https://static.wikia.nocookie.net/disney/images/5/53/Profile_-_Wendy_Darling.jpeg/revision/latest?cb=20190312151612", "my name is Wendy!", error => {
        if (error) {
            console.error(error)

            return
        }

        console.log("post created succesfully!")
    })
} catch (error) {
    console.error(error)
}