const createPosts = require("./createPosts")

try {
    createPosts("24dlukpa1skg", "https://elcorreoweb.es/documents/10157/0/image_content_18563891_20161222114201.jpg", "soy Batman!", error => {
        if (error) {
            console.error(error)

            return
        }

        console.log("post created succesfully!")
    })
} catch (error) {
    console.error(error)
}