const createPosts = require("./createPosts")

try {
    createPosts("2b4bwcqo9ps0", "https://filasiete.com/wp-content/uploads/2020/05/peterpan.jpg", "hola!!!", error => {
        if (error) {
            console.error(error)

            return
        }

        console.log("post created succesfully!")
    })
} catch (error) {
    console.error(error)
}