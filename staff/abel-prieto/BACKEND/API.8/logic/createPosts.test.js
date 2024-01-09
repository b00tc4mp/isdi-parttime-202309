const mongoose = require('mongoose')
const createPosts = require("./createPosts")

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPosts("6594280f88dc69a7d9e4e18f", "https://play-lh.googleusercontent.com/7Zn2QBzByBf4XyQPhuRVsOkSaKSYsty1ka-6_bh6Ub-2kQri6xqqRdK52qxEM69N6cw", "Tetris prueba", error => {
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