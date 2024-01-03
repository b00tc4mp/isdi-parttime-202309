const mongoose = require('mongoose')
const createPosts = require("./createPosts")

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPosts("65942e03e5a6dab915783e58", "https://elcorreoweb.es/documents/10157/0/image_content_18563891_20161222114201.jpg", "Im Batman!", error => {
                if (error) {
                    console.error(error)
        
                    return
                }
        
                console.log("post created succesfully!")
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))