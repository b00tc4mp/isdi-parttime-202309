const toggleFavPost = require ('./toggleFavPost')

try {
    toggleFavPost( "1g6al6ee05pc", "40ga0cl8bd00", error => {
        if (error){
            console.error(error)
            return
        }

        console.log('post like toggled')
    })
    
} catch (error) {
    console.error(error)
    
}


// CASE ToggleFav
// (base) lf@MacBook-Pro-de-Luis api % node ./logic/toggleFavPost.test.js 
// post like toggled

// {
//     "id": "1g6al6ee05pc",
//     "name": "Pe Pino",
//     "email": "pe@pino.com",
//     "password": "123123123",
//     "favs": [
//         "40ga0cl8bd00"
//     ]
// },

//CASE "Unfav"

// (base) lf@MacBook-Pro-de-Luis api % node ./logic/toggleFavPost.test.js
// post like toggled
// (base) lf@MacBook-Pro-de-Luis api % 

// {
//     "id": "1g6al6ee05pc",
//     "name": "Pe Pino",
//     "email": "pe@pino.com",
//     "password": "123123123",
//     "favs": []
// },


// CASE Post do not exist
try {
    toggleFavPost( "1g6al6ee05pc", "POSTDONOTEXIST", error => {
        if (error){
            console.error(error)
            return
        }

        console.log('post like toggled')
    })
    
} catch (error) {
    console.error(error)
    
}

// (base) lf@MacBook-Pro-de-Luis api % node ./logic/toggleFavPost.test.js
// NotFoundError: post do not exist
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/fullstack/api/logic/toggleFavPost.js:34:26

// CASE User do not exist

try {
    toggleFavPost( "USERDONOTEXISTS", "40ga0cl8bd00", error => {
        if (error){
            console.error(error)
            return
        }

        console.log('post like toggled')
    })
    
} catch (error) {
    console.error(error)
    
}

// (base) lf@MacBook-Pro-de-Luis api % node ./logic/toggleFavPost.test.js
// NotFoundError: user not found
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/fullstack/api/logic/toggleFavPost.js:20:22